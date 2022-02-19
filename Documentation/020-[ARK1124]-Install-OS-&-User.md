# OS not Open Sourced : Install Windows 10 & Configure ADVANTECH ARK-1124


**FIRST SECTION** : Properties of this documentation
* **Difficulty** : Low (1/5)
  * Detail the difficulty for a non-expert person (not the expert that could do that in 5 minutes) 

* **Estimated time to perform** : 1 hour 
  * Gives an estimated time to complete the opetations for a non-expert person (not the expert that could do that in 5 minutes)

**SECOND SECTION**
* Bill of material
  * NETGEAR Switch 
  * ARK-1124

**THIRD SECTION : install Windows 10**
For the demo purposes, you could use the user / password : 
* user : admfactoviaone
* password : demo-opensource-factovia-2022-industry

* Prepare USB Key > 5 GB
* Download special Microsoft tool **"MediaCreationTool21H2.exe"** to prepare the USB Key in 1 click (download latest version, and write simultaneously in the USB Key)
![image.png](./Resource-Images/image-f24ca31c-dc23-4572-bb02-67fa1364334f.png)
* and run the tool (see on the right)
![image.png](./Resource-Images/image-ebb193c0-a694-4cb9-93db-4d544daf0cfe.png)

* insert the USB Key and boot. It will start the basic mini-install
* when asked to enter the registration Key, choose "I don't have the registration key"
  Then it will lead you to a menu to choose which version of Win 10 to use. 
  Because it is a demo version for FactoVia One, choose "Windows 10 Education x64"
![image.png](./Resource-Images/image-b00827f9-fdb5-4b7e-be90-25e1eb2b4610.png)
* prepare you license key (usually choose "Windows 10 for Education - MultipleActivation"
  for example : KBKGK-XXXXX-XXXXX-XXXXX-XXXXX
* accept the terms & conditions
* to choose a completely new install on the 59.6GB of free storage SSD, simply press "Next"
* the Install process will start (copying Windows files, getting files ready for installation, installing features, installing updates, finishing up)

* choose for the login "Joint domain" > user : see above > password : see above  > question 1 : "pet 1 name" = cat > "city born" = cat > "child nickname" = cat
* PRIVACY : No (location) > No (Find device) > "send required diag data" > No > No > Cortana = "Not now" ...


# NETWORK CONFIGURATION
Below, we are going to use the NETGEAR Switch : 
- Plug in the RJ45 of ARK1124 to NETGEAR Switch (for instance entry "1")

Windows 10 is tricky to configure the IP Address of the ARK1124 and often leads to the error *"Can’t save IP settings. Check one or more settings and try again."*.
Let's use the old fashion way (see : https://www.thewindowsclub.com/cant-save-ip-settings-windows)

You can follow the given steps to change IP Settings by Control Panel.

Trick with old fashion way with old Windows menus : Open Control Panel from the Start Menu.
Make sure your “View by” is set to Large icons.
Click Network and Sharing Center > Change adapter settings.
Right-click on your Ethernet connection and select Properties.
Select Internet Protocol Version 4 (TCP/IPv4) and click Properties.
Now, select “Use the following IP address”, insert the IP address, Subnet Mask, Default Gateway, DNS Server, and click OK. Then, we will in the information :  
- IP address  = 192.168.127.3
- Subnet Mask = 255.255.255.0
- Default Gateway = {leave it blank}
- DNS Server      = {leave it blank}

Note : Now if we use the new Windows 10 menus to access a similar information, we have : 
- IP settings = Manual
- IP address = 192.168.127.3
- Subnet prefix lenght = 24 
- Prefered  DNS = {leave it blank} 
- Alternate DNS = {leave it blank}

Then Windows indicates : 
- IPv4 gateway     = 192.168.127.1
- IPv4 DNS servers = 192.168.24.254 


 **SANITY CHECK :**

![image.png](./Resource-Images/image-695686f8-d1b4-44ef-8738-5259f341b231.png)

![image.png](./Resource-Images/image-d0357ecd-1276-43dc-93ca-182850051c1c.png)

![image.png](./Resource-Images/image-ebd9c012-5b7a-4d2b-81e5-6d9402a1f594.png)



