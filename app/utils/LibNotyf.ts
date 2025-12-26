import {Notyf} from "notyf";
import 'notyf/notyf.min.css';

export default class LibNotyf {
    private notyf: Notyf;


    constructor() {
        this.notyf = new Notyf({
            position: {
                x: 'right',
                y: 'top',
            },
            types: [
                {
                    type: 'success',
                    background: '#3dc763',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
                },
                {
                    type: 'error',
                    background: '#ed3d3d',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
                },
                {
                    type: 'info',
                    background: '#285cf8',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
                },
                {
                    type: 'warning',
                    background: '#c7c03d',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
                },

            ],
        });
    }


    success(text: string): void {
        this.notyf.open({
            type: 'success',
            message: text
        });
    }


    error(text: string, duration: number = 2000, dismissible: boolean = false): void {
        this.notyf.open({
            duration,
            dismissible,
            type: 'error',
            message: text
        });

    }

    info(text: string) {
        this.notyf.open({
            type: 'info',
            message: text
        })
    };

    warning(text: string, duration: number = 2000) {
        this.notyf.open({
            type: 'warning',
            duration,
            message: text
        })

    }
}
