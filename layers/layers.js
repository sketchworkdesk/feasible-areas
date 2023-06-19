var wms_layers = [];

var format_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0 = new ol.format.GeoJSON();
var features_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0 = format_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.readFeatures(json_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.addFeatures(features_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0);
var lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0, 
                style: style_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0,
                interactive: true,
                title: 'KROSNO HOMANIT FEASIBLE AREAS — feasible_areas'
            });
var format_KROSNOHOMANITpointLNN_1 = new ol.format.GeoJSON();
var features_KROSNOHOMANITpointLNN_1 = format_KROSNOHOMANITpointLNN_1.readFeatures(json_KROSNOHOMANITpointLNN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KROSNOHOMANITpointLNN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KROSNOHOMANITpointLNN_1.addFeatures(features_KROSNOHOMANITpointLNN_1);
var lyr_KROSNOHOMANITpointLNN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KROSNOHOMANITpointLNN_1, 
                style: style_KROSNOHOMANITpointLNN_1,
                interactive: true,
                title: '<img src="styles/legend/KROSNOHOMANITpointLNN_1.png" /> KROSNO HOMANIT point LNN'
            });
var format_KROSNObuffer10km_2 = new ol.format.GeoJSON();
var features_KROSNObuffer10km_2 = format_KROSNObuffer10km_2.readFeatures(json_KROSNObuffer10km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KROSNObuffer10km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KROSNObuffer10km_2.addFeatures(features_KROSNObuffer10km_2);
var lyr_KROSNObuffer10km_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KROSNObuffer10km_2, 
                style: style_KROSNObuffer10km_2,
                interactive: true,
                title: '<img src="styles/legend/KROSNObuffer10km_2.png" /> KROSNO buffer 10 km'
            });
var format_KrosnoHomanitpointKrosnoHomanit_3 = new ol.format.GeoJSON();
var features_KrosnoHomanitpointKrosnoHomanit_3 = format_KrosnoHomanitpointKrosnoHomanit_3.readFeatures(json_KrosnoHomanitpointKrosnoHomanit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KrosnoHomanitpointKrosnoHomanit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KrosnoHomanitpointKrosnoHomanit_3.addFeatures(features_KrosnoHomanitpointKrosnoHomanit_3);
var lyr_KrosnoHomanitpointKrosnoHomanit_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KrosnoHomanitpointKrosnoHomanit_3, 
                style: style_KrosnoHomanitpointKrosnoHomanit_3,
                interactive: true,
                title: 'Krosno Homanit point — Krosno Homanit'
            });
var format_SETKROSNOPOTENTIALSOLARAREASFC_4 = new ol.format.GeoJSON();
var features_SETKROSNOPOTENTIALSOLARAREASFC_4 = format_SETKROSNOPOTENTIALSOLARAREASFC_4.readFeatures(json_SETKROSNOPOTENTIALSOLARAREASFC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETKROSNOPOTENTIALSOLARAREASFC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETKROSNOPOTENTIALSOLARAREASFC_4.addFeatures(features_SETKROSNOPOTENTIALSOLARAREASFC_4);
var lyr_SETKROSNOPOTENTIALSOLARAREASFC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SETKROSNOPOTENTIALSOLARAREASFC_4, 
                style: style_SETKROSNOPOTENTIALSOLARAREASFC_4,
                interactive: true,
                title: '<img src="styles/legend/SETKROSNOPOTENTIALSOLARAREASFC_4.png" /> SET KROSNO, POTENTIAL SOLAR AREAS, FC'
            });
var format_SETKROSNOFEASIBLESOLARAREASFC_5 = new ol.format.GeoJSON();
var features_SETKROSNOFEASIBLESOLARAREASFC_5 = format_SETKROSNOFEASIBLESOLARAREASFC_5.readFeatures(json_SETKROSNOFEASIBLESOLARAREASFC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETKROSNOFEASIBLESOLARAREASFC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETKROSNOFEASIBLESOLARAREASFC_5.addFeatures(features_SETKROSNOFEASIBLESOLARAREASFC_5);
var lyr_SETKROSNOFEASIBLESOLARAREASFC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SETKROSNOFEASIBLESOLARAREASFC_5, 
                style: style_SETKROSNOFEASIBLESOLARAREASFC_5,
                interactive: true,
                title: '<img src="styles/legend/SETKROSNOFEASIBLESOLARAREASFC_5.png" /> SET KROSNO, FEASIBLE SOLAR AREAS, FC'
            });
var format_NatureProtectionbuffer_6 = new ol.format.GeoJSON();
var features_NatureProtectionbuffer_6 = format_NatureProtectionbuffer_6.readFeatures(json_NatureProtectionbuffer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NatureProtectionbuffer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NatureProtectionbuffer_6.addFeatures(features_NatureProtectionbuffer_6);
var lyr_NatureProtectionbuffer_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NatureProtectionbuffer_6, 
                style: style_NatureProtectionbuffer_6,
                interactive: true,
                title: '<img src="styles/legend/NatureProtectionbuffer_6.png" /> Nature Protection buffer'
            });
var format_Buffered_7 = new ol.format.GeoJSON();
var features_Buffered_7 = format_Buffered_7.readFeatures(json_Buffered_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_7.addFeatures(features_Buffered_7);
var lyr_Buffered_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_7, 
                style: style_Buffered_7,
                interactive: true,
                title: '<img src="styles/legend/Buffered_7.png" /> Buffered'
            });
var group_KROSNO110V = new ol.layer.Group({
                                layers: [lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0,lyr_KROSNOHOMANITpointLNN_1,lyr_KROSNObuffer10km_2,lyr_KrosnoHomanitpointKrosnoHomanit_3,lyr_SETKROSNOPOTENTIALSOLARAREASFC_4,lyr_SETKROSNOFEASIBLESOLARAREASFC_5,lyr_NatureProtectionbuffer_6,lyr_Buffered_7,],
                                title: "KROSNO 110V"});

lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.setVisible(true);lyr_KROSNOHOMANITpointLNN_1.setVisible(true);lyr_KROSNObuffer10km_2.setVisible(true);lyr_KrosnoHomanitpointKrosnoHomanit_3.setVisible(true);lyr_SETKROSNOPOTENTIALSOLARAREASFC_4.setVisible(true);lyr_SETKROSNOFEASIBLESOLARAREASFC_5.setVisible(true);lyr_NatureProtectionbuffer_6.setVisible(true);lyr_Buffered_7.setVisible(true);
var layersList = [group_KROSNO110V];
lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', });
lyr_KROSNOHOMANITpointLNN_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_KROSNObuffer10km_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_KrosnoHomanitpointKrosnoHomanit_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SETKROSNOPOTENTIALSOLARAREASFC_4.set('fieldAliases', {'id': 'id', });
lyr_SETKROSNOFEASIBLESOLARAREASFC_5.set('fieldAliases', {'id': 'id', });
lyr_NatureProtectionbuffer_6.set('fieldAliases', {'id': 'id', });
lyr_Buffered_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', });
lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id': '', });
lyr_KROSNOHOMANITpointLNN_1.set('fieldImages', {'id': '', 'Name': '', });
lyr_KROSNObuffer10km_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_KrosnoHomanitpointKrosnoHomanit_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SETKROSNOPOTENTIALSOLARAREASFC_4.set('fieldImages', {'id': 'TextEdit', });
lyr_SETKROSNOFEASIBLESOLARAREASFC_5.set('fieldImages', {'id': 'TextEdit', });
lyr_NatureProtectionbuffer_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Buffered_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id': 'TextEdit', });
lyr_KROSNOHOMANITFEASIBLEAREASfeasible_areas_0.set('fieldLabels', {});
lyr_KROSNOHOMANITpointLNN_1.set('fieldLabels', {});
lyr_KROSNObuffer10km_2.set('fieldLabels', {});
lyr_KrosnoHomanitpointKrosnoHomanit_3.set('fieldLabels', {});
lyr_SETKROSNOPOTENTIALSOLARAREASFC_4.set('fieldLabels', {});
lyr_SETKROSNOFEASIBLESOLARAREASFC_5.set('fieldLabels', {});
lyr_NatureProtectionbuffer_6.set('fieldLabels', {});
lyr_Buffered_7.set('fieldLabels', {});
lyr_Buffered_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});