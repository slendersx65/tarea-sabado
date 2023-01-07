import random

dinero = int(input("dinero de usuario:"))
apuesta =int(input("insertar dinero a apostar:"))
for i in range(2):
    resultado =random.choice(["cara","sello"])
    resultado = random.randint(1,2)
if resultado == random.randint (1,2):
    dinero = dinero + apuesta*2
    print("felicidades ganaste, tu saldo es:",dinero )
else :
    dinero -= apuesta 
    print("es una lastima,mejor suerte la proxima, tu saldo es:",dinero)

