# PX Blue Progress Icons
This is a library of icons with dynamic fill capabilities that can be used to show progress (similar to a traditional progress spinner or bar). These can be used to show health, battery life, etc.

Currently, we have icons available for:
* battery
* heart
* pie

## Installation
To install the PX Blue progress icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
yarn add @pxblue/ng-progress-icons // for Angular components
yarn add @pxblue/react-progress-icons // for React components
```


## Using the progress icons in your application
The progress icon components can be imported and used like you would use any other component. You can manually set the desired color for the icon, otherwise it will inherit the text color of its parent container;
  
### Angular
```
// app.module.ts
import { BatteryModule, HeartModule, PieModule } from '@pxblue/ng-progress-icons';
...
imports: [
    BatteryModule,
    HeartModule,
    PieModule
],
```
```
// app.component.html
<battery-progress percent="80" size="36" color="green"></battery-progress>
<heart-progress percent="180" size="36" color="pink"></heart-progress>
<pie-progress percent="30" size="36" color="#0000ff" ring="4"></pie-progress>
```

### React
```
import {Battery, Heart, Pie} from '@pxblue/react-progress-icons';
...
<Battery percent={100} size={36} color={'green'}/>
<Heart percent={50} size={18} color={'pink'}/>
<Pie percent={50} size={48} color={'#0000ff'} ring={40}/>
```

#### Available properties
* ```percent``` (Number): the amount to fill the icon. **Default**: 100.
* ```size``` (Number): the size of the icon (px). **Default**: 24.
* ```color``` (String): the color to use for the icon. **Default**: inherit. Color can also be set through the ```style``` property.
* ```ring``` (Number, *Pie only*): the thickness of the outer ring, as a percent (1 (thin ring) - 10 (full circle)). **Default**: 10.