**How to mount power, Install and Configure a BB-400**

![image.png](./Images/040010image-BB400Overview.png)

https://www.brainboxes.com/news/introducing-the-bb-400-neuron-edge-controller


**POWER**

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

To be continued
