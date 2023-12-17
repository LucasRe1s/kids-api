#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setLocale(LC_ALL, "");

    int quantidadeIngressos = 0;

    printf("digite a quantodade de ingressos \n");
    scanf("%d", &quantidadeIngressos);
    
    if (quantidadeIngressos<= 1000) {
        printf("Serão necessarios 4 seguranças \n");
    }else {
        if (quantidadeIngressos > 1000 && quantidadeIngressos <= 5000) {
            printf("Serão necessarios 6 seguranças \n");   
        }else {
            if (quantidadeIngressos > 5000 && quantidadeIngressos <= 10000) {
                printf("Serão necessarios 10 seguranças \n");   
            }else {
                if (quantidadeIngressos > 10000 && quantidadeIngressos <= 20000) {
                    printf("Serão necessarios 15 seguranças \n");   
                }else {
                    if (quantidadeIngressos > 20000 && quantidadeIngressos <= 50000) {
                        printf("Serão necessarios 25 seguranças \n");   
                    }else {
                        printf("necessario aprovação especial\n");   
                    }
                }
            }
        }
    }
}