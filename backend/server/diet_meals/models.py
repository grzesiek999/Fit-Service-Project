from django.db import models
from diets.models import Diet
from products.models import Product

class DietMeal(models.Model):
    diet_id = models.ForeignKey(
        Diet,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    meal = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    describe = models.TextField()
    product1_weight = models.IntegerField(blank=True, null=True)
    product1_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product1'
    )
    product2_weight = models.IntegerField(blank=True, null=True)
    product2_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product2'
    )
    product3_weight = models.IntegerField(blank=True, null=True)
    product3_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product3'
    )
    product4_weight = models.IntegerField(blank=True, null=True)
    product4_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product4'
    )
    product5_weight = models.IntegerField(blank=True, null=True)
    product5_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product5'
    )
    product6_weight = models.IntegerField(blank=True, null=True)
    product6_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product6'
    )
    product7_weight = models.IntegerField(blank=True, null=True)
    product7_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product7'
    )
    product8_weight = models.IntegerField(blank=True, null=True)
    product8_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product8'
    )
    product9_weight = models.IntegerField(blank=True, null=True)
    product9_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product9'
    )
    product10_weight = models.IntegerField(blank=True, null=True)
    product10_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product10'
    )
    product11_weight = models.IntegerField(blank=True, null=True)
    product11_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product11'
    )
    product12_weight = models.IntegerField(blank=True, null=True)
    product12_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='dietmeal_product12'
    )
