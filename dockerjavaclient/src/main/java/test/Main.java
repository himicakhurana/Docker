package test;
import javax.swing.JOptionPane;
/**
 *
 * @author Hizbul Bahar
 */
public class Main {
 
/**
 * @param args the command line arguments
 */
 public static void main(String[] args) {
 // TODO code application logic here
 //int seclct;
 
 operation op=new operation();
 int select;
 do
 {
 select=Integer.parseInt(JOptionPane.showInputDialog("Select An Option:\n1.SJF NonPreemptive\n2.Round Robin"));
 
switch(select)
 {
 case 1:
 
System.out.println("SJF NonPreemptive");
 System.out.println ("-------------------");
 
op.getData();
 op.SjfNp();
 break;
 
case 2:
 System.out.println("Round Robin");
 System.out.println ("-------------------");
 op.RoundRobin();
 break;
 case 3:
 break;
 }
 }
 while(select<=3);
 }
}