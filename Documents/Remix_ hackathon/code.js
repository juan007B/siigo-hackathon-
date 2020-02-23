onEvent("button12", "click", function( ) {
  setScreen("screen2");
});
onEvent("button1", "click", function( ) {
  var nombre  = getText("text_input_0");
  var NIT = getText("text_input1");
  var RC = getText("text_input2");
  var AE = getText("text_input3");
  var NLD = getText("text_input4");
  var direc = getText("text_input5");
  var ciu = getText("text_input6");
  var tel = getText("text_input7");
  var corr = getText("text_input8");
  var mone = getText("text_input9");
  var NE = getText("text_input10");
  var inf_empr = nombre+"\n"+"NIT:"+NIT+"\n"+RC+"\n"+"actividad economica:"+AE+"\n"+NLD+"\n"+direc+"\t"+ciu+"\n"+"tel:"+tel+"\t"+"correo:"+corr+"\n"+"moneda:"+mone+"\n"+"\n"+NE+"\n";
  setText("text_area1", inf_empr);
  setScreen("screen3");
});
onEvent("button2", "click", function( ) {
  var FV = getText("text_input11");
  var año = getText("text_input12");
  var mes = getText("text_input13");
  var dia = getText("text_input14");
  var hora = getText("text_input15");
  var TOS = getText("text_input16");
  var caje = getText("text_input17");
  var caja = getText("text_input18");
  var inf_factu ="numero de factura:"+FV+"\n"+"año:"+año+"\t"+"mes:"+mes+"\t"+"dia:"+dia+"\t"+"hora:"+hora+"\n"+"tienda o surcursal:"+TOS+"\n"+"nombre cajero:"+caje+"\n"+"N° caja"+caja;
  setText("text_area3", inf_factu);
  setScreen("screen4");
});
onEvent("button11", "click", function( ) {
  setText("text_input_0", "");
  setText("text_input1", "");
  setText("text_input2", "");
  setText("text_input3", "");
  setText("text_input4", "");
  setText("text_input5", "");
  setText("text_input6", "");
  setText("text_input7", "");
  setText("text_input8", "");
  setText("text_input9", "");
  setText("text_input10", "");
  setText("text_input11", "");
  setText("text_input12", "");
  setText("text_input13", "");
  setText("text_input14", "");
  setText("text_input15", "");
  setText("text_input16", "");
  setText("text_input17", "");
  setText("text_input18", "");
  setScreen("screen1");
});

