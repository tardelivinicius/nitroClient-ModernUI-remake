import { Component } from '@angular/core';
import { Nitro } from '@nitrots/nitro-renderer';
import { SessionService } from '../../../../security/services/session.service';

@Component({
    selector: 'nitro-hotelview-component',
    templateUrl: './hotelview.template.html'
})
export class HotelViewComponent
{
    private _background: string;
    private _backgroundColour: string;
    private _hotelViewLeft: string;
    private _hotelViewRight: string;
    private _sun: string;
    private _drape: string;
    private _left: string;
    private _right: string;
    private _rightRepeat: string;
    private _promo1: string;
    private _promo2: string;
    private _promo3: string;
    private _promo4: string;

    constructor(
        private sessionService: SessionService)
    {
        this._background        = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['background']);
        this._backgroundColour  = Nitro.instance.getConfiguration('hotelview.images')['background.colour'];
        this._hotelViewLeft  = Nitro.instance.getConfiguration('hotelview.images')['hotelview.left'];
        this._hotelViewRight  = Nitro.instance.getConfiguration('hotelview.images')['hotelview.right'];
        this._sun               = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['sun']);
        this._drape             = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['drape']);
        this._left              = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['left']);
        this._right             = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['right']);
        this._rightRepeat       = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['right.repeat']);
        this._promo1      = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['promo1']);
        this._promo2      = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['promo2']);
        this._promo3      = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['promo3']);
        this._promo4      = Nitro.instance.core.configuration.interpolate(Nitro.instance.getConfiguration('hotelview.images')['promo4']);
        
    }

    public get figure(): string
    {
        return this.sessionService.figure;
    }

    public get background(): string
    {
        return (this._background || null);
    }

    public get backgroundColour(): string
    {
        return (this._backgroundColour || null);
    }

    public get hotelViewLeft(): string
    {
        return (this._hotelViewLeft || null);
    }

    public get hotelViewRight(): string
    {
        return (this._hotelViewRight || null);
    }

    public get sun(): string
    {
        return (this._sun || null);
    }

    public get drape(): string
    {
        return (this._drape || null);
    }

    public get left(): string
    {
        return (this._left || null);
    }

    public get right(): string
    {
        return (this._right || null);
    }

    public get rightRepeat(): string
    {
        return (this._rightRepeat || null);
    }

    public get promo1(): string
    {
        return (this._promo1 || null);
    }

    public get promo2(): string
    {
        return (this._promo2 || null);
    }

    public get promo3(): string
    {
        return (this._promo3 || null);
    }

    public get promo4(): string
    {
        return (this._promo4 || null);
    }
    
}
