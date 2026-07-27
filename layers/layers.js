var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2 = new ol.format.GeoJSON();
var features_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2 = format_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.readFeatures(json_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.addFeatures(features_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2);
var lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2, 
                style: style_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2,
                popuplayertitle: '20260726_GRID_FG_LOGBOOK_TFCCA_BURU',
                interactive: true,
                title: '<img src="styles/legend/20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.png" /> 20260726_GRID_FG_LOGBOOK_TFCCA_BURU'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2];
lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.set('fieldAliases', {'PageName': 'PageName', 'PageNumber': 'PageNumber', 'No_Grid': 'Nomor Grid FG', 'LUAS_HA': 'LUAS_HA', });
lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.set('fieldImages', {'PageName': 'Hidden', 'PageNumber': 'Hidden', 'No_Grid': 'TextEdit', 'LUAS_HA': 'Hidden', });
lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.set('fieldLabels', {'No_Grid': 'inline label - always visible', });
lyr_20260726_GRID_FG_LOGBOOK_TFCCA_BURU_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});