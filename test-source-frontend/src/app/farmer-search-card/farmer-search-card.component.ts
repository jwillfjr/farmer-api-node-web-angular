import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from './farmer-search-abstract-provider.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'farmer-search-card',
    templateUrl: './farmer-search-card.component.html',
    styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

    @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;

    @Output() onPartnerSelectedEvent = new EventEmitter();
    options: FormGroup;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            nameOrDocument: ['',Validators.required]
        });
    }

    ngOnInit(): void { }

    search() {
        this.farmerSearchAbstractProvider.searchFarmers(this.options.controls['nameOrDocument'].value).then(farmers => {
            console.log(farmers);
            this.onPartnerSelectedEvent.emit(farmers);
        })
    }
}
