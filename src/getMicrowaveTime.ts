import { MicrowaveBoundsException } from './MicrowaveBoundsException';


/**
 * Get the microwave time representation of an integer
 * @param  {integer} time Integer to get microwave time for
 * @return {string}       Microwave time representation of the integer
 * @throws MicrowaveBoundsException if the output cannot fit on a standard microwave LCD display or is negative
 */
export function getMicrowaveTime(time: number = 0): string
{

    if (time < 0 || time > 5999)
    {
        throw new MicrowaveBoundsException('Integer is out of range: ' + time.toString());
    }

    let minutes: string = Math.floor(time / 60).toString();
    let seconds: string = (time - (parseInt(minutes) * 60)).toString();

    if (minutes.length === 1)
    {
        minutes = '0' + minutes;
    }

    if (seconds.length === 1)
    {
        seconds = '0' + seconds;
    }

    return minutes + ':' + seconds;

}
