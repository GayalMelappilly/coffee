# Generated by Django 4.2.17 on 2025-02-22 15:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("users", "0001_initial"),
        ("likes", "0002_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="like",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="likes",
                to="users.user",
            ),
        ),
        migrations.AlterUniqueTogether(
            name="like",
            unique_together={("user", "post"), ("user", "comment")},
        ),
    ]
