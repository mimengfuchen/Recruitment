# Generated by Django 2.1.7 on 2019-08-30 01:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppointmentTiem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.CharField(blank=True, max_length=255, null=True, verbose_name='面试时间')),
            ],
            options={
                'verbose_name': '面试时间',
                'verbose_name_plural': '面试时间',
            },
        ),
        migrations.CreateModel(
            name='Interview',
            fields=[
                ('interview_id', models.CharField(default='', max_length=11, primary_key=True, serialize=False, verbose_name='学号')),
                ('interview_name', models.CharField(default='', max_length=50, verbose_name='姓名')),
                ('interview_direction', models.CharField(default='', max_length=15, verbose_name='方向')),
                ('interview_password', models.CharField(default='', max_length=30, verbose_name='密码')),
                ('reason', models.TextField(blank=True, null=True, verbose_name='原因')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(verbose_name='问题详情')),
                ('interview', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interviewer.Interview')),
            ],
            options={
                'verbose_name': '面试问题',
                'verbose_name_plural': '面试问题',
            },
        ),
    ]
