const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

const panel = new BABYLON.GUI.StackPanel();
panel.width = "220px";
panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
panel.paddingTopInPixels = "20px";
advancedTexture.addControl(panel);

const header = new BABYLON.GUI.TextBlock();
header.text = "X distance: 0";
header.height = "30px";
header.color = "white";
panel.addControl(header); 

var slider = new BABYLON.GUI.Slider();
slider.minimum = -2;
slider.maximum = 2;
slider.value = 0;
slider.height = "20px";
slider.width = "200px";
slider.onValueChangedObservable.add(function(value) {
    header.text = "X distance: " + Math.round(value * 10) / 10;
    scene.getMeshByName("sphere").position.x = value;
});
panel.addControl(slider); 
