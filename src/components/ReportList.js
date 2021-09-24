import React from "react";
import Report from "./Report";

function sortByContestId(a, b) {
  return (
    b.node.frontmatter.contest.contestid - a.node.frontmatter.contest.contestid
  );
}

const ReportList = ({ reports }) => {
  return (
    <>
      {reports.sort(sortByContestId).map((report) => (
        <Report report={report.node.frontmatter} key={report.node.id} />
      ))}
    </>
  );
};

export default ReportList;
