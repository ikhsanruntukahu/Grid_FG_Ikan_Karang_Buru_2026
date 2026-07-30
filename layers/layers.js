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
var format_GridLokasiPenangkapan_2 = new ol.format.GeoJSON();
var features_GridLokasiPenangkapan_2 = format_GridLokasiPenangkapan_2.readFeatures(json_GridLokasiPenangkapan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GridLokasiPenangkapan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GridLokasiPenangkapan_2.addFeatures(features_GridLokasiPenangkapan_2);
var lyr_GridLokasiPenangkapan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GridLokasiPenangkapan_2, 
                style: style_GridLokasiPenangkapan_2,
                popuplayertitle: 'Grid Lokasi Penangkapan',
                interactive: true,
                title: '<img src="styles/legend/GridLokasiPenangkapan_2.png" /> Grid Lokasi Penangkapan'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_GridLokasiPenangkapan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_GridLokasiPenangkapan_2];
lyr_GridLokasiPenangkapan_2.set('fieldAliases', {'PageName': 'PageName', 'PageNumber': 'PageNumber', 'No_Grid': 'No_Grid', 'LUAS_HA': 'LUAS_HA', });
lyr_GridLokasiPenangkapan_2.set('fieldImages', {'PageName': 'Hidden', 'PageNumber': 'Hidden', 'No_Grid': 'TextEdit', 'LUAS_HA': 'Hidden', });
lyr_GridLokasiPenangkapan_2.set('fieldLabels', {'No_Grid': 'inline label - always visible', });
lyr_GridLokasiPenangkapan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});