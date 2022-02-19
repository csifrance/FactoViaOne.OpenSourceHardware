# Configure LAN and VNet
Now that we have the PLC, the Field gateway and the IoT Edge, we can connect them all to the Switch.

Configuration : 

**PLC**
IP address = 192.168.127.3

**Field Gateway - Windows 10**
IP settings = Manual
**IP address = 192.168.127.3**
Subnet prefix lenght = 24 

IPv4 gateway = 192.168.127.1
IPv4 DNS servers = 192.168.24.254 

**IoT Edge - Linux Ubuntu**
* First check current IP address and writ it down
* go to [Top right menu > click on Wifi icon > Click on tool screw driver and wrenk > Network Settings > Network > identify your network (for instance eno1) > click on the right hand-side the wheel icone > Wired > Tab "IPv4" > Ethernet (eno1) > gear_icon > IPv4]
  
IPv4 Method = Manual (as opposed to DHCP)
**address = 192.168.127.4**
Netmask (try 1 : 255.255.0.0)
  * // Subnet prefix lenght = 24 
Gateway = 192.168.127.1  (always in .1 and the other .2 .3 .4 etc...)

  * // DNS = 192.168.24.254  ==> Set to default


#SANITY CHECK
* From IoT Edge Linux :
  * run ping 192.168.127.1  => time=1.04ms 
* From Field Gateway : 
  * run ping 192.168.127.1  => time<1ms TTL=64
  * run ping 192.168.127.3  => time<1ms TTL=128

