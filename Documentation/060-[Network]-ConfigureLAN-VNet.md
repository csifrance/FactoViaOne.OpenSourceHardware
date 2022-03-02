# Configure LAN and VNet
Now that we have the PLC BB400, the Field gateway and the IoT Edge, we can connect them all to the Switch.

Configuration : 

**PLC BB400**
IP address = 192.168.127.1 (by default; DO NOT CHANGE !)

**Field Gateway - Windows 10**
IP settings = Manual
IP address = 192.168.127.3**
Subnet prefix lenght = 24 
// IPv4 gateway = 192.168.127.1
// IPv4 DNS servers = 192.168.24.254 

**IoT Edge MEVA / HPE - Linux Ubuntu**
* First check current IP address and writ it down
* go to [Top right menu > click on Wifi icon > Click on tool screw driver and wrenk > Network Settings > Network > identify your network (for instance eno1) > click on the right hand-side the wheel icone > Wired > Tab "IPv4" > Ethernet (eno1) > gear_icon > IPv4]
  
IPv4 Method = Manual (as opposed to DHCP)
* address IPv4 = 192.168.127.4
* IPv6 = fe80::3ad5:19f4:1740:b6eb
* H/w address = 00:69:67:D0:04:97
Netmask (try 1 that works to ping : 255.255.0.0)
  * // Subnet prefix lenght = 24 
// Gateway = Leave it blank = cannot be 192.168.127.1 because already used (otherwise always in .1 and the other .2 .3 .4 etc...)
// DNS = leave it automatic ; = 192.168.24.254  ==> Set to default
// Routes = leave it automatic ;


#SANITY CHECK
* From IoT Edge Linux :
  * run ping 192.168.127.1  => time=1.04ms 
  * Ping of itself ! admfactoviaone@iotedge:~/Desktop/Install$ ping 192.168.127.4
     * PING 192.168.127.4 (192.168.127.4) 56(84) bytes of data.
     * 64 bytes from 192.168.127.4: icmp_seq=1 ttl=64 time=0.055 ms
     * 64 bytes from 192.168.127.4: icmp_seq=2 ttl=64 time=0.053 ms
  * Ping of BB400 admfactoviaone@iotedge:~/Desktop/Install$ ping 192.168.127.1
     * PING 192.168.127.1 (192.168.127.1) 56(84) bytes of data.
     * 64 bytes from 192.168.127.1: icmp_seq=1 ttl=64 time=0.648 ms
     * 64 bytes from 192.168.127.1: icmp_seq=2 ttl=64 time=0.844 ms
     * 64 bytes from 192.168.127.1: icmp_seq=3 ttl=64 time=0.875 ms


* From Field Gateway : 
  * run ping 192.168.127.1  => time<1ms TTL=64
  * run ping 192.168.127.3  => time<1ms TTL=128


# TROUBLE SHOOT
* admfactoviaone@iotedge:~/Desktop/Install$ curl 192.168.127.1:9000
curl: (7) Failed to connect to 192.168.127.1 port 9000: Connection refused
  * This may be because your BB400 is rebooting. Try again in 1 or 2 minutes, you should have 
  * admfactoviaone@iotedge:~/Desktop/Install$ curl 192.168.127.1:9000{"io":{"counts":[0,0,0,1,0,0,0,0],"inputs":[1,1,1,1,1,1,1,1],"outputs":[0,0,0,0,0,0,0,0]}}

