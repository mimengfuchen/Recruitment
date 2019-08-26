function addTime(btn) {
    var divtime = document.getElementById(btn.id + '_div');
    var long = divtime.getElementsByTagName('INPUT');
    var input_text = document.createElement("INPUT");
    input_text.type = 'text';
    input_text.name = divtime.id + long;
    input_text.style.margin = '2px';
    divtime.insertBefore(input_text, btn)
}

function addDate(btn) {
    var time = document.getElementById('time_table');
    var divs = time.getElementsByTagName('div');
    var long = divs.length + 1;
    var div = document.createElement("DIV");
    var name = "date" + long;
    div.id = name + '_div';
    div.className = 'appoint_time';
    div.innerHTML = "日期:<input type=\"text\" class=\"date\"/><br/><br/>\n" +
        "时间:<input type=\"text\" class = \"text\"/><input type=\"text\" class = \"text\"/><input type=\"text\" class = \"text\"/><input id=\"" + name + "\" type=\"button\" value=\"增加\" onclick=\"addTime(this)\"/><br/>\n";
    var add = document.getElementById('add_date');
    time.insertBefore(div, add);
}
/*
function addIntertime(btn){
    var divtime = document.getElementById(btn.id + '_div');
    var long = divtime.getElementsByTagName('INPUT');
    var input_text = document.createElement("INPUT");
    var aaa = document.getElementById('aaa');
    aaa.innerHTML = long;
    input_text.type = 'text';
    input_text.name = divtime.id + long;
    input_text.style.margin = '2px';
    divtime.insertBefore(input_text, btn)
}

function addInternum(btn){
    var divtime = document.getElementById(btn.id + '_div');
    var long = divtime.getElementsByTagName('INPUT');
    var input_text = document.createElement("INPUT");
    var aaa = document.getElementById('aaa');
    aaa.innerHTML = btn.id;
    input_text.type = 'text';
    input_text.name = divtime.id + long;
    input_text.style.margin = '2px';
    divtime.insertBefore(input_text, btn)
}

function addInterday(btn) {
    var time = document.getElementById('inter_table');
    var divs = time.getElementsByTagName('div');
    var long = divs.length + 1;
    var div = document.createElement("DIV");
    var name = "date" + long;
    div.id = name + '_div';
    div.className = 'appoint_time';
    div.innerHTML = "日期:<input type=\"text\" class=\"date\"/><br/><br/>\n" +
        "时间:<input type=\"text\" class = \"text\"/><input type=\"text\" class = \"text\"/><input type=\"text\" class = \"text\"/><input id=\"" +
        "人数:<input type=\'text\' class = \"text\"/><input type=\"text\" class = \"text\"/><input type=\"text\" class = \"text\"/><input id=\"" + name + "\" type=\"button\" value=\"增加\" onclick=\"addIntertime(this)\"/><br/>\n";

    var add = document.getElementById('add_date');
    time.insertBefore(div, add);

}
*/
function getPostNum() {
    var b = document.getElementsByTagName('B');
    b[0].innerText = '生成中';
    var num = document.getElementById('num').value;
    var csrf_token = getCookie('csrftoken');
    $.ajax({
        url: "/data/manage/",
        type: "POST",
        data: {
            'num': num,
            'csrfmiddlewaretoken': csrf_token
        },
        success: function (result) {
            if (result === '200') {
                window.location.href = '/data/manage/'
            }else if(result === '数据生成出错，请输入数字'){
                b[0].innerText = result;
            }else if (result==='数据生成完成'){
                b[0].innerText = result;
            }
        }
    })
}

function getAppointmentTime() {
    var b = document.getElementsByTagName('B');
    b[1].innerText = '生成中';
    var appointment_time = document.getElementsByClassName("appoint_time");
    var date = '';
    for (i = 0; i < appointment_time.length; i++) {
        var timeList = appointment_time[i].childNodes;
        for (j=0;j<timeList.length-8;j++){
            date = date+timeList[1].value + '_' + timeList[j+5].value + '@';
        }
    }
    var csrf_token = getCookie('csrftoken');
    $.ajax({
        url: "/data/manage/timedata/",
        type: "POST",
        data: {
            'date': date,
            'csrfmiddlewaretoken': csrf_token
        },
        success: function (result) {
            if (result === '200') {
                window.location.href = '/data/manage/'
            }else if(result === '成功'){
                b[1].innerText = result;
            }else if (result==='错误'){
                b[1].innerText = result;
            }
        }
    })
}

function getAppointment(){

}