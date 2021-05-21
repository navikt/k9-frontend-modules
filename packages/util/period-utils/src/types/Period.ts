import { initializeDate, prettifyDateString } from '@navikt/k9-date-utils';

class Period {
    fom: string;

    tom: string;

    constructor(fom: string, tom: string) {
        this.fom = fom;
        this.tom = tom;
    }

    prettifyPeriod() {
        return `${prettifyDateString(this.fom)} - ${prettifyDateString(this.tom)}`;
    }

    includesDate(dateString: string) {
        const dateInQuestion = initializeDate(dateString);
        const fomDayjs = initializeDate(this.fom);
        const tomDayjs = initializeDate(this.tom);
        return (
            (dateInQuestion.isSame(fomDayjs) || dateInQuestion.isAfter(fomDayjs)) &&
            (dateInQuestion.isSame(tomDayjs) || dateInQuestion.isBefore(tomDayjs))
        );
    }

    covers(otherPeriod: Period) {
        return this.includesDate(otherPeriod.fom) && this.includesDate(otherPeriod.tom);
    }

    overlapsLeft(otherPeriod: Period) {
        return this.includesDate(otherPeriod.fom) && !this.includesDate(otherPeriod.tom);
    }

    overlapsRight(otherPeriod) {
        return this.includesDate(otherPeriod.tom) && !this.includesDate(otherPeriod.fom);
    }

    overlapsWith(otherPeriod) {
        return this.covers(otherPeriod) || this.overlapsLeft(otherPeriod) || this.overlapsRight(otherPeriod);
    }

    startsBefore(otherPeriod: Period) {
        const dateInQuestion = initializeDate(otherPeriod.fom);
        const periodFom = initializeDate(this.fom);
        return periodFom.isBefore(dateInQuestion);
    }

    endsAfter(otherPeriod: Period) {
        const dateInQuestion = initializeDate(otherPeriod.tom);
        const periodTom = initializeDate(this.tom);
        return periodTom.isAfter(dateInQuestion);
    }

    overlapsWithSomePeriodInList(periodList: Period[]) {
        return periodList.some((currentPeriod) => this.overlapsWith(currentPeriod));
    }

    fomIsBeforeOrSameAsTom() {
        const fomDate = initializeDate(this.fom);
        const tomDate = initializeDate(this.tom);
        return fomDate.isBefore(tomDate) || fomDate.isSame(tomDate);
    }
}

export default Period;
