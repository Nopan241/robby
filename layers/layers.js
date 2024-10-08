var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                popuplayertitle: "Export_Output",
                interactive: false,
    title: 'Export_Output<br />\
    <img src="styles/legend/Export_Output_1_0.png" /> KECAMATAN BLIMBING<br />\
    <img src="styles/legend/Export_Output_1_1.png" /> KECAMATAN KEDUNGKANDANG<br />\
    <img src="styles/legend/Export_Output_1_2.png" /> KECAMATAN KLOJEN<br />\
    <img src="styles/legend/Export_Output_1_3.png" /> KECAMATAN LOWOKWARU<br />\
    <img src="styles/legend/Export_Output_1_4.png" /> KECAMATAN SUKUN<br />\
    <img src="styles/legend/Export_Output_1_5.png" /> <br />'
        });
var format_kec_2 = new ol.format.GeoJSON();
var features_kec_2 = format_kec_2.readFeatures(json_kec_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kec_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kec_2.addFeatures(features_kec_2);
var lyr_kec_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kec_2, 
                style: style_kec_2,
                popuplayertitle: "kec",
                interactive: false,
                title: '<img src="styles/legend/kec_2.png" /> kec'
            });
var format_Export_Output_3_3 = new ol.format.GeoJSON();
var features_Export_Output_3_3 = format_Export_Output_3_3.readFeatures(json_Export_Output_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_3_3.addFeatures(features_Export_Output_3_3);
var lyr_Export_Output_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_3_3, 
                style: style_Export_Output_3_3,
                popuplayertitle: "Export_Output_3",
                interactive: false,
                title: '<img src="styles/legend/Export_Output_3_3.png" /> Export_Output_3'
            });
var format_POINTFIXX_4 = new ol.format.GeoJSON();
var features_POINTFIXX_4 = format_POINTFIXX_4.readFeatures(json_POINTFIXX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTFIXX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTFIXX_4.addFeatures(features_POINTFIXX_4);
var lyr_POINTFIXX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POINTFIXX_4, 
                style: style_POINTFIXX_4,
                popuplayertitle: "POINTFIXX",
                interactive: true,
                title: '<img src="styles/legend/POINTFIXX_4.png" /> POINTFIXX'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Export_Output_1.setVisible(true);lyr_kec_2.setVisible(true);lyr_Export_Output_3_3.setVisible(true);lyr_POINTFIXX_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Export_Output_1,lyr_kec_2,lyr_Export_Output_3_3,lyr_POINTFIXX_4];
lyr_Export_Output_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', });
lyr_kec_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_Export_Output_3_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_POINTFIXX_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'NO': 'NO', 'NAMA_TOKO': 'NAMA_TOKO', 'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'KODE_POS': 'KODE_POS', 'FASILITAS': 'FASILITAS', });
lyr_Export_Output_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', });
lyr_kec_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_Export_Output_3_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_POINTFIXX_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'NO': 'TextEdit', 'NAMA_TOKO': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'KODE_POS': 'TextEdit', 'FASILITAS': 'TextEdit', });
lyr_Export_Output_1.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', });
lyr_kec_2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_Export_Output_3_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_POINTFIXX_4.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'NO': 'no label', 'NAMA_TOKO': 'header label - visible with data', 'KECAMATAN': 'header label - visible with data', 'KOTA': 'header label - visible with data', 'PROVINSI': 'header label - visible with data', 'KODE_POS': 'no label', 'FASILITAS': 'no label', });
lyr_POINTFIXX_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});