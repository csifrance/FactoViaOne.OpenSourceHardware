**Installation of the Open Source Operating System : Linux Ubuntu 18.04 LTS**
(Could also do with 20 LTS)

Many IoT Edge computing could do the job : 
* HPE EL300 that is a monster !
* Arestech (another massive monster! as detailed below)
  * MEVA 3110 : https://www.arestech.com.tw/machine-vision-computer-meva-3110.html
  * Supports 8th/9th Gen Intel® LGA 1151 Processors
    Triple Display Supported by VGA, DVI and Display Port
    2 x DDR4 2400 / 2666MHz SO-DIMM, Max up to 64GB
    3 x Intel GbE Ports, Supporting Wake-on-LAN and PXE
    4 x Removable 2.5“ SATA HDD bay and
    2 x CFast / mSATA, Supporting RAID 0, 1, 5, 10
    4 x Full-Size Mini-PCIe and 4 x SIM Sockets
    9~48V DC Input with Built-in Ignition Power Control
    -40°C ~ 70°C Wide Temperature Operation

    * CPU : Intel(R) Core(TM) i7-9700TE CPU @ 1.80GHz 8 cores
       * specifications : https://openbenchmarking.org/s/Intel%20Core%20i7-9700TE
    * HDD : 3 x 2TB Samsung SSD 860 PRO 
    * RAM : 64 GB (2x32 GB)

**Installing the OS**
- Prepare a bootable USB
- instert in any of the 8 USB port
- Turn the device on (tiny metallic button) ==> you will arrive in the BIOS ==> Quit the BIOS
- in the GNU GRUB menu, choose "Install Ubuntu" > English (even if we are in French) > Keyboard (choose your layout)
- wifi : choose yours > click "Continue"
- Choose install third parties and Download updates and Normal installation (web browser, utilities, ...) : because it is a demo box. Else : not GUI
- Erase disk and install Ubuntu > choose option "Use LVM with the new Ubuntu installation"
- choose the drive SCSI1 (0,0,0) (sda) - 2.0 TB ATA Samsung SSD 860
  - others are (sdb) and (sdc)
- confirmaton : disk will be used : 
  - Ubuntu   /dev/sda (ext4) 2.0 TB
- Timezone : paris
- identification of the computer 
  - your name : admfactoviaone
  - your computers name : iotedge
  - pick a username = admfactoviaone
  - Password : (make your own)
  -  Log in automatically
- wait 2 minutes > reboot > in the menu choose "Ubuntu"
- configure wizzard > "No, don't send system info"
- 


