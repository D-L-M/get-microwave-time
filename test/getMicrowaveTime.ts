import { expect } from 'chai';
import { getMicrowaveTime } from '../dist/getMicrowaveTime';


describe('getMicrowaveTime()', function()
{


    it('works for integers within bounds', function()
    {

        expect(getMicrowaveTime(0)).to.equal('00:00');
        expect(getMicrowaveTime(1)).to.equal('00:01');
        expect(getMicrowaveTime(2)).to.equal('00:02');
        expect(getMicrowaveTime(59)).to.equal('00:59');
        expect(getMicrowaveTime(60)).to.equal('01:00');
        expect(getMicrowaveTime(61)).to.equal('01:01');
        expect(getMicrowaveTime(90)).to.equal('01:30');
        expect(getMicrowaveTime(1800)).to.equal('30:00');
        expect(getMicrowaveTime(3599)).to.equal('59:59');
        expect(getMicrowaveTime(3600)).to.equal('60:00');
        expect(getMicrowaveTime(3601)).to.equal('60:01');
        expect(getMicrowaveTime(5999)).to.equal('99:59');

    });


    it ('fails with an integer beyond the lower bound', function()
    {

        expect(() =>
        {
            getMicrowaveTime(-1);
        }).to.throw('Integer is out of range: -1');

    });


    it ('fails with an integer beyond the upper bound', function()
    {

        expect(() =>
        {
            getMicrowaveTime(6000);
        }).to.throw('Integer is out of range: 6000');

    });


});
