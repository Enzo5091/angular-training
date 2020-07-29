import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges(): any{   
        if(this.sessions){
            this.filterSessions(this.filterBy);
            console.log(this.sortBy)
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
     }

    filterSessions(filterBy: string): any {
        if(filterBy === 'all'){
            this.visibleSessions = this.sessions.slice(0);
            }
        else{
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filterBy
            })
        }
    }  
}

function sortByNameAsc (s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1;
    if(s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc (s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}