**How to mount power, Install and Configure a BB-400**

![image.png](./Images/040010image-BB400Overview.png)

https://www.brainboxes.com/news/introducing-the-bb-400-neuron-edge-controller


**POWER**
The recommanded Power Supply is this one (PW-400 : OUTPUT: 12V DC 1.5A) : 
https://www.brainboxes.com/product/accessories/power-supplies/pw-400


However, depending on the Use Case that we want to implement in FactoVia One, we will be needing either 29V DC, 25V DC, 19V DC, 12V DC ou 5V DC.
In this example, we are going to use a 19V DC 3.16A which could be dangerous for the BB-400, that can cope with 15 W Maximum. Else you could grill your BB-400, if we don't take care of what we are plugging on the BB-400 as output devices. 

**Properties** Power Input : +5V to +30V DC 15W Max

Depending on the hardware configuration that you install on the FactoVia One, the calculations below will be different.
In our case, we rely on a 24V DC (eg TowerLights, fans, ...) we have : 
15W / 24V = 0.625 ampers = 625 mA as a MAXIMUM ALLOWED consumption of current (Ampers) for the BB-400.

We mesured previously that the TowerLights (Green/Orange/Red) uses about 21.5 mA. Let's round it up we a security factor to 30 mA per light. But we will not use all the light at the same time.


IMPORTANT : calculation of maximum Ampers and Watts that flow inside the BB-400.
The Max allowed 625 mA (see previous calculation)

We have than Ampers usage for BB-400 + TowerLights + horn + fan ... that should be less than 150 mA, i.e. that are in total far less than 625 mA. As a result, we are secured !

**INSTALL**

To be continued

**CONFIGURE**
For debug purpose, you could directly plug-in a RJ45 ethernet cable between the BB-400 (LAN and not UPLINK for this debug configuration) and ARK-1124 (either female front plug or rear).

To be continued
