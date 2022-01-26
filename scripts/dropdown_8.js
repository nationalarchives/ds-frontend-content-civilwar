//dynamic menu for Learning Curve (lc) - British Empire klee v1.00
//Empire klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",11,"#333366","#ffffff","#ffffff","#333366","left","middle",0,0,1000,0,0,true,true,true,10,true,true);
  lc_menu_0.addMenuItem("Source&nbsp;1","location='../s1/'");
  lc_menu_0.addMenuItem("Source&nbsp;2","location='../s2/'");
  lc_menu_0.addMenuItem("Source&nbsp;3","location='../s3/'");
  lc_menu_0.addMenuItem("Source&nbsp;4","location='../s4/'");
  lc_menu_0.addMenuItem("Source&nbsp;5","location='../s5/'");
  lc_menu_0.addMenuItem("Source&nbsp;6","location='../s6/'");
  lc_menu_0.addMenuItem("Source&nbsp;7","location='../s7/'");
  lc_menu_0.addMenuItem("Source&nbsp;8","location='../s8/'");
  lc_menu_0.bgImageUp="/education/civilwar/images/dropdown/drop_option_u.gif";
  lc_menu_0.bgImageOver="/education/civilwar/images/dropdown/drop_option_d.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu forLearning Curve end
