**Installation of the Open Source Operating System : Linux Ubuntu 18.04 LTS**
(Could also do with 20 LTS)

Many IoT Edge computing could do the job : 
* HPE EL300 that is a monster !
* Arestech (another massive monster! as detailed below)

CPU : Intel(R) Core(TM) i7-9700TE CPU @ 1.80GHz 8 cores
specifications : https://openbenchmarking.org/s/Intel%20Core%20i7-9700TE

HDD : 3 x 2TB Samsung SSD 860 PRO 

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


