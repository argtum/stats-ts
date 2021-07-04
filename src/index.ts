import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const reader = new MatchReader(`football.csv`);
reader.read();

const summary = new Summary(
    new WinsAnalysis(`Man United`),
    new HtmlReport()
);
summary.buildAndPrintReport(reader.data);