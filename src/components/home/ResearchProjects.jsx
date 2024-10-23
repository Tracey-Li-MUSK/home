import React from "react";
import { Jumbotron } from "./migration";

const ImageWithCaption = ({ src, description }) => {
  return (
    <div className="text-center mb-4">
      <img src={src} alt= "" className="img-fluid" />
      <div className="mt-2">
        <p className="text-centen">{description}</p>
      </div>
    </div>
  );
};

const ResearchProjects = ({ heading }) => {
  return (
    <Jumbotron
      id="research"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="row justify-content-center">
      <div className="col-10">
        <p className="lead text-left">
          <strong>
            1. Genotype-phenotype relationship in a cohort of 116 Chinese patients with Myotonic Dystrophy type 1 - Key Laboratory of Medical Neurobiology of Zhejiang Province
          </strong>
        </p>
        <ul className="lead text-left">
          <li>Conducted the largest retrospective cohort study in China of 116 Myotonic Dystrophy type 1 patients.</li>
          <li>
            Collect demographic information, symptoms, signs, laboratory test results, and MRI data from 116 DM1 patients who were enrolled from June 2015 to December 2022. Extract DNA from peripheral blood samples and perform Triplet-primed PCR to analyze CTG repeats. Utilize contingency analysis for categorical data and parametric or non-parametric test for interval data to find out the relationship between clinical parameters and genetic information (CTG repeats).
          </li>
        </ul>
        <ImageWithCaption
          src={require("../../editable-stuff/pic6.png")}
          description="The family chart in the study shows the transmission of dynamic mutations"
        />
        <p className="lead text-left">
          <strong>
          2. Two cases of a novel X-linked recessive distal myopathy caused by SMPX gene mutations - Key Laboratory of Medical Neurobiology of Zhejiang Province
          </strong>
        </p>
        <ul className="lead text-left">
          <li>Report for the first time in Asia 2 cases of a novel distal myopathy related to SMPX gene mutation.</li>
          <li>10 cases of novel distal myopathy caused by mutations in the small muscle protein X-linked gene (SMPX) were reported internationally for the first time in 2021. We searched our database and find out two cases of myopathy patients without clear diagnosis but shows SMPX mutation(c.A34G).</li>
          <li>To verify the pathogenicity of SMPX c.A34G, we: Construct plasmids containing the mutation site. Transfect them into 293T cells, detect SMPX protein solubility by WB.</li>
        </ul>
        <ImageWithCaption
          src={require("../../editable-stuff/pic7.png")}
          description="The WB results show the mutation site leads to a decrease in the solubility of the target protein"
        />
        <p className="lead text-left">
          <strong>
          3. Study on the efficacy of the combination therapy of borneol, temozolomide, and risperidone in the treatment of mouse glioma - (Oct 2019-Jan 2020) Zhejiang University & Zhejiang Chinese Medical University
          </strong>
        </p>
        <ul className="lead text-left">
          <li>This undergraduate preliminary course project aims to cultivate my basic scientific research thinking and teamwork ability. We proposed the usage of the antagonist of dopamine receptor 2-- resperidone--as an adjuvant medicine of temozolomide in treating Glioma.</li>
          <li>As a team and with the guidance and help from research assistants in Zhejiang Chinese Medical University, we established a tumor animal model using U87 cells and Non-Scid mouse. Administer medication orally for two weeks.</li>
          <li>Evaluated relative tumor proliferation rate before and after administration based on live animal fluorescence imaging.</li>
        </ul>
        <p className="lead text-left">
          <strong>
          4. A probe into the mechanism by which Sirt5 inhibits the activation of inflammasome NLRP3 and its role in lipid Metabolism disorders - (Sep 2019-Sep 2020) Institute of Immunology, School of Medicine, Zhejiang University
          </strong>
        </p>
        <ul className="lead text-left">
          <li>Investigated the effects of SIRT5 on NLRP3 activation at the molecular, cellular, and mouse levels using techniques such as WB, Elisa, RT-PCR, immunohistochemistry etc.</li>
        </ul>
      </div>
    </div>
    </Jumbotron>
  );
};

export default ResearchProjects;