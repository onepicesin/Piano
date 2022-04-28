/**
 * 钢琴音乐模块
 * 
 * */
//% color="#eb0ed9" weight=25 icon="\uf001"
namespace ABT_Piano {
    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Release" block="松开"
        Release = 1
    }
    /**
     * 控制按钮按下松开
     * 
     * */
    //% blockId=ABT_Input_Button2 block="Button|pin %pin|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(pin: DigitalPin, value: enButton): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == value;
    }
    
    
    
    //引脚
    export enum touch_pin {
        None = 0,
        P2 = 2,
        P5 = 5,
        P8 = 8,
        P11 = 11,
        P12 = 12,
        P13 = 13,
        P14 = 14,
        P15 = 15
    }

    //引脚地址
    export enum touch {
        //% blockId="None" block="None"
        None = 0x0000,
        //% blockId="C" block="C"
        C = 0x0001,
        //% blockId="D" block="D"
        D = 0x0002,
        //% blockId="E" block="E"
        E = 0x0004,
        //% blockId="F" block="F"
        F = 0x0008,
        //% blockId="G" block="G"
        G = 0x0010,
        //% blockId="A" block="A"
        A = 0x0020,
        //% blockId="B" block="B"
        B = 0x0040,
        //% blockId="CH" block="CH"
        CH = 0x0080,
    }
    export enum enMusic {
        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,
        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }
    /**
     * 播放音乐
     * 
     * */
    //% blockId=ABT_Play_Music block="Music_play|%index"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% index.min=0 index.max=19
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Play_Music(index: number): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }
    /**
     * 播放音乐
     * 
     * */
    //% blockId=ABT_Music_Play block="Music_play|%index"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Music_Play(index: enMusic): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }
    /**
     * 按键触摸返回
     * 
     * */
    //% blockId=ABT_Touch block="Music Touch return"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Touch(): number {
        let a = 0;
        let b = 0;
        let c = 0;
        //使用指定的数字格式在I2C地址向设备写入数字。 要写入一个字节无符号数大端
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        //使用指定的数字格式从I2C地址读取一个数字。要读取一个字节无符号数大端
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        return c;
    }
    /**
     * 控制音量
     * 
     * */
    //% blockId=ABT_Volume block="Music Volume %volume"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% volume.min=0 volume.max=255 volume.defl=125
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function ABT_Volume(volume:number):void{
        music.setVolume(volume);
    }
    /**
     * 音乐按钮地址
     * 
     * */
    //% blockId=ABT_TouchButton block="Music Button|%value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: touch): number {
        let c = value;
        return c;
    }
    /**
     * 通过控制音调调整不同引脚地址的触发音色 低中高
     * 
     * */
    //% blockId=ABT_PlayPiano block="Play Piano|tone %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% value.min=1 value.max=3 value.defl=2
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function PlayPiano(value: number): void {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;

        if (value == 1) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(131);
            } else if (c & touch.D) {
                music.ringTone(147);
            } else if (c & touch.E) {
                music.ringTone(165);
            } else if (c & touch.F) {
                music.ringTone(175);
            } else if (c & touch.G) {
                music.ringTone(196);
            } else if (c & touch.A) {
                music.ringTone(220);
            } else if (c & touch.B) {
                music.ringTone(247);
            } else if (c & touch.CH) {
                music.ringTone(262);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 2) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(262);
            } else if (c & touch.D) {
                music.ringTone(294);
            } else if (c & touch.E) {
                music.ringTone(330);
            } else if (c & touch.F) {
                music.ringTone(349);
            } else if (c & touch.G) {
                music.ringTone(392);
            } else if (c & touch.A) {
                music.ringTone(440);
            } else if (c & touch.B) {
                music.ringTone(494);
            } else if (c & touch.CH) {
                music.ringTone(523);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 3) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(523);
            } else if (c & touch.D) {
                music.ringTone(587);
            } else if (c & touch.E) {
                music.ringTone(659);
            } else if (c & touch.F) {
                music.ringTone(698);
            } else if (c & touch.G) {
                music.ringTone(784);
            } else if (c & touch.A) {
                music.ringTone(880);
            } else if (c & touch.B) {
                music.ringTone(988);
            } else if (c & touch.CH) {
                music.ringTone(1046);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
    }
     /**
     * 由引脚处地址是否与返回设置地址一致 来触发条件
     * 
     * */
    //% blockId=ABT_KeyBoard_Touch block="KeyBoard Touch Return|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function KeyBoard_Touch(value: touch_pin): boolean {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        if ((c & temp) != 0) {
            c = c & temp;
        } else {
            switch (value) {
                case touch_pin.None:
                    return (c & touch.None) == 0;
                    break;
                case touch_pin.P2:
                    return (c & touch.C) == 0x0001;
                    break;
                case touch_pin.P5:
                    return (c & touch.D) == 0x0002;
                    break;
                case touch_pin.P8:
                    return (c & touch.E) == 0x0004;
                    break;
                case touch_pin.P11:
                    return (c & touch.F) == 0x0008;
                    break;
                case touch_pin.P12:
                    return (c & touch.G) == 0x0010;
                    break;
                case touch_pin.P13:
                    return (c & touch.A) == 0x0020;
                    break;
                case touch_pin.P14:
                    return (c & touch.B) == 0x0040;
                    break;
                case touch_pin.P15:
                    return (c & touch.CH) == 0x0080;
                    break;
                default:
                    break;
            }
        }
        return false;
    }
}

//% color="#08a0d8" weight=25 icon="\uf145"
namespace Abt_Sensor {
    export enum ABTsensor {
        //% blockId="MicroSeconds" block="μs"
        MicroSeconds = 0,
        //% blockId="Centimeters" block="cm"
        Centimeters,
        //% blockId="inches" block="inches"
        Inches
    }
     /**
     * 光敏传感器
     * 
     * */
    //% blockId=Abt_Sensor_Light block="Light|pin %pin"
    //% weight=5
    //% blockGap=8
    //% color="#08a0d8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5 
    export function Light(pin: AnalogPin): number {
        let value: number;
        value = pins.analogReadPin(pin);
        return value;
    }
    /**
     * 声音传感器
     * 
     * */
    //% blockId=Abt_Sensor_Sound block="Sound|pin %pin"
    //% weight=5
    //% blockGap=8
    //% color="#08a0d8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Sound(pin: AnalogPin): number {
        let value: number;
        value = pins.analogReadPin(pin);
        return value;
    }
    /**
     * 震动传感器
     * 
     * */
    //% blockId=Abt_Sensor_Vibration block="Vibration|pin %pin|get "
    //% weight=95
    //% blockGap=20
    //% color="#08a0d8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Vibration(pin: DigitalPin, handle: () => void): void {
        let Pin = 0;
        pins.setPull(pin, PinPullMode.PullUp);
        // pins.setEvents(pin, PinEventType.Pulse);
        // pins.onPulsed(pin, PulseValue.High, handle);
        //配置给定引脚发出的事件类型。边缘事件
        pins.setEvents(pin, PinEventType.Edge);
        //将此引脚配置为数字输入，并生成时间戳是此引脚为 HI 或 LO 的持续时间的事件
        control.onEvent(pin, DAL.MICROBIT_PIN_EVT_FALL, handle);
    }
    /**
     * 霍尔传感器 测是否有磁力
     * 
     * */
    //% blockId=Abt_Sensor_Hall block="Hall|pin %pin|get "
    //% weight=94
    //% blockGap=20
    //% color="#08a0d8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Hall(pin: DigitalPin, handle: () => void): void {
        pins.setPull(pin, PinPullMode.PullUp);
        // pins.setEvents(pin, PinEventType.Pulse);
        // pins.onPulsed(pin, PulseValue.High, handle);
        //配置给定引脚发出的事件类型。边缘事件
        pins.setEvents(pin, PinEventType.Edge);
        //将此引脚配置为数字输入，并生成时间戳是此引脚为 HI 或 LO 的持续时间的事件
        control.onEvent(pin, DAL.MICROBIT_PIN_EVT_FALL, handle);

    }
}

//% color="#9005c4" weight=25 icon="\uf042"
namespace Abt_Display {
    //灯光显示 
    let yahStrip: neopixel.Strip;
    /**
     * 七彩灯
     * 
     * */
    //%  block="RGB_Car_Program led"
    //% weight=5
    //% blockGap=8
    //% color="#9005c4"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB_Car_Program(): neopixel.Strip {

        if (!yahStrip) {
            yahStrip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB);
        }
        return yahStrip;
    }

    export enum ABT_color {
        //% blockId="OFF" block="灭"
        OFF,
        //% blockId="Red" block="红色" 
        Red,
        //% blockId="Green" block="绿色"
        Green,
        //% blockId="Blue" block="蓝色"
        Blue,
        //% blockId="White" block="白色"	//蓝+绿+红
        White,
        //% blockId="Cyan" block="青色"	    //蓝+绿
        Cyan,
        //% blockId="Pinkish" block="品红"  //蓝+红
        Pinkish,
        //% blockId="Yellow" block="黄色"   //红+绿
        Yellow
    }
    export enum ABT_LED {

        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="ON" block="亮"
        ON = 1
    }
    export enum ABT_LED1 {

        //% blockId="left" block="左灯"
        left = 0,
        //% blockId="right" block="右灯"
        right = 1,
        //% blockId="all" block="全部"
        all = 2
    }
    /**
     * 控制灯亮灭
     * 
     * */
    //% blockId=ABT_LED0 block="LED1|pin %pin|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#9005c4"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function LED1(pin: DigitalPin, value: ABT_LED): void {
        pins.digitalWritePin(pin, value);
    }
    /**
     * 控制灯亮灭和亮度
     * 
     * */
    //% blockId=ABT_LED1 block="LED2|pin %pin|value %value"
    //% weight=4
    //% blockGap=8
    //% color="#9005c4"
    //% value.min=0 value.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=2
    export function LED2(pin: AnalogPin, value: number): void {
        pins.analogWritePin(pin, value * 1024 / 256);
    }
    /**
     * 呼吸灯
     * 
     * */
    //% blockId=ABT_BreathLED block="BreathLED|pin %pin"
    //% weight=3
    //% blockGap=8
    //% color="#9005c4"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=3
    export function BreathLED(pin: AnalogPin): void {
        for (let i: number = 0; i < 1023; i++) {
            pins.analogWritePin(pin, i);
            //basic.pause(1);
            control.waitMicros(1000);
        }
        basic.pause(10);
        for (let i: number = 1023; i > 0; i--) {
            pins.analogWritePin(pin, i);
            //basic.pause(1);
            control.waitMicros(1000);
        }
    }
    /**
     * 控制灯亮度和颜色
     * 
     * */
    //% blockId=ABT_RGB block="RGB|pin1 %pin1|value1 %value1|pin2 %pin2|value2 %value2|pin3 %pin3|value3 %value3"
    //% weight=2
    //% blockGap=8
    //% color="#9005c4"
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB(pin1: AnalogPin, value1: number, pin2: AnalogPin, value2: number, pin3: AnalogPin, value3: number): void {
        pins.analogWritePin(pin1, value1 * 1024 / 256);
        pins.analogWritePin(pin2, value2 * 1024 / 256);
        pins.analogWritePin(pin3, value3 * 1024 / 256);
    }
    /**
     * 控制灯颜色
     * 
     * */
    //% blockId=ABT_RGB1 block="RGB|pin1 %pin1|pin2 %pin2|pin3 %pin3|value %value"
    //% weight=1
    //% blockGap=8
    //% color="#9005c4"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function RGB1(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, value: ABT_color): void {
        switch (value) {
            case ABT_color.OFF: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
            }; break;
            case ABT_color.Red: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
            }; break;
            case ABT_color.Green: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
            }; break;
            case ABT_color.Blue: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
            }; break;
            case ABT_color.White: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 1);
            }; break;
            case ABT_color.Cyan: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 1);
            }; break;
            case ABT_color.Pinkish: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
            }; break;
            case ABT_color.Yellow: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
            }; break;
        }
    }
}
//电机
//% color="#ffd800" weight=25 icon="\uf013"
namespace Abt_Motor {

    /**
     * 舵机
     * 
     * */
    //% blockId=ABT_Servo block="Servo|pin %pin|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#ffd800"
    //% value.min=0 value.max=180
    //% value.defl=90
    //% group=ABT_electric machinery
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
    export function Servo(pin: AnalogPin, value: number): void {
        pins.servoWritePin(pin, value);
    }
    /**
     * 直流电机 控制速度
     * 
     * */
    //% blockId=ABT_MotorRun block="Motor|%pin|speed %speed"
     //% weight=5
    //% blockGap=8
    //% color="#ffd800"
    //% speed.min=0 speed.max=1023
    //% group=ABT_electric machinery
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function MotorRun(pin: AnalogPin, speed: number): void {
        pins.analogWritePin(pin, speed);
    }
    /**
     * 控制电机停止
     * 
     * */
    //% blockId=ABT_MotorStop block="MotorStop |pin %pin"
    //% weight=5
    //% blockGap=8
    //% color="#ffd800"
    //% group=ABT_electric machinery
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function MotorStop(pin: AnalogPin): void {
        pins.analogWritePin(pin, 0);
    }
}


