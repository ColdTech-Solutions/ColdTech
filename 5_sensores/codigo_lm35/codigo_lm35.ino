
// #define DHTPIN A3

#define LM35PIN A1
// #define LUMIPIN A2
// #define CHAVPIN 7

//DHT dht(DHTPIN, DHT11);

void setup() {              
  //pinMode(DHTPIN, INPUT);
  //pinMode(CHAVPIN, INPUT);
Serial.begin(9600);
  //dht.beg
  }

void loop() {
  //float dht11_umidade = dht.readHumidity();
  //float dht11_temperatura = dht.readTemperature();
  //Serial.print(dht11_umidade);
  //Serial.print(";");
  //Serial.print(dht11_temperatura);
  //Serial.println(";");
     
    //float luminosidade = analogRead(LUMIPIN);
    //Serial.print(luminosidade);
    //Serial.print(";");

float lm35_temperatura = analogRead(LM35PIN);
lm35_temperatura = lm35_temperatura * 0.00488;
lm35_temperatura = lm35_temperatura * 100;
Serial.print(lm35_temperatura);

    //int aproximidade = digitalRead(7);
    //if(aproximidade == 0){
      //Serial.print("1");
     
    //} else { Serial.print("0");}

Serial.println();
   
delay(2000);
}