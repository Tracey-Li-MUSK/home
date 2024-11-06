import React from "react";
import { Jumbotron } from "./migration";

const ImageWithCaption = ({ src, description, width, height }) => {
  return (
    <div className="text-center mb-4">
      <img
        src={src}
        alt=""
        className="img-fluid"
        style={{ width: width || '100%', height: height || 'auto' }}
      />
      <div className="mt-2" style={{ width: width || '100%', margin: '0 auto' }}>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

const WorkingExperience = ({ heading }) => {
  return (
    <Jumbotron
      id="work"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">{"I have been a resident doctor in The Second Affiliated Hospital of Zhejiang University School of Medicine. Rotating in the following departments has shaped who I am today."}</p>
      </div>
      <ImageWithCaption
        src={require("../../editable-stuff/pic1.png")}
        description={"A sculpture of a doctor and a kid patient bowing and paying tribute to each other at the entrance of the Second Hospital of Zhejiang University."}
        width={600}
      />
      <p className="display-6 pb-3 text-center">{"Neurology"}</p>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">{"There is a saying that \"neurology is the king of internal medicine\" in China. YEP! As a big fan of neurology,  I have witnessed its charm here."}</p>
      </div>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">
          <ul>
              <li>{"\"A young man with dance-like movements of the left limb\"-Cerebral infarction involving the right caudate nucleus."}</li>
              <li>{"\"Sudden tinnitus on the right side, with the sound disappearing when pressing on the right side of the neck\"-right intracranial venous sinus stenosis."}</li>
              <li>{"\"A patient with cerebellar infarction complain of headache and vomitting?\"-edema in the infarction of cerebellum compresses the fourth ventricle, leading to intracranial hypertension."}</li>
          </ul>
        </p>
      </div>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">{"These are all the cases I have handled in this department. With the direction of Dr.Zhang, Dr.Chen and Dr.Ouyang, some mysterious puzzles on patients have been solved."}</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 d-none d-lg-block text-center">
          <ImageWithCaption
            src={require("../../editable-stuff/pic2.png")}
            description={"My friends and I from Dr.Chen's team. I still reminiscenced about the extremely harmonious atmosphere of cooperation."}
            width={400}
          />
        </div>
        <div className="col-6">
          <div className="row justify-content-center">
            <p className="lead text-left col-10">
              <strong>{"My life in neurology involves managing patients undergoing cerebrovascular intervention surgeries, taking care of stroke patients, and handling patients with Parkinson's syndrome and other neurology-related disorders."}</strong> {"One of my major highlight moments was when I independently figured out the cause for a patent who was griping about dizziness and memory decline. His suspected positive family history and white matter lesions shown on MRI grabbed my attention. We did genetic testing on him and found a mutation in the HTRA1 gene(as shown in the picture). He was finally diagnosed as CADASIL(Cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy) and received the antiplatelet therapy."}
            </p>
          </div>
        </div>
        <ImageWithCaption
            src={require("../../editable-stuff/pic3.png")}
            description={"Sanger sequencing confirmed the point mutation of the HTRA1 gene in the patient."}
            width={600}
          />
      </div>
      <p className="display-6 pb-3 text-center">{"Neurosurgery"}</p>
      <div className="row justify-content-center">
        <div className="col-4 d-none d-lg-block text-center">
          <ImageWithCaption
            src={require("../../editable-stuff/pic4.png")}
            description={"Being an assistant to Director Ling's transnasal endoscopic pituitary tumor resection surgery, Dr. Gao provided guidance beside me."}
            width={360}
          />
        </div>
        <div className="col-6">
          <div className="row justify-content-center">
            <div><p className="lead text-left">{"Neurosurgery is definitely the most wonderful department for me cuz I am super curious about craniotomy. Fortunately, I have had the privilege of being the first surgical assistant multiple times,"} <strong>{"participating in acoustic neuroma resection, glioma resection, V-P shunt surgery, and transnasal endoscopic pituitary tumor resection."}</strong> {"I am grateful to Dr.Gao and Dr.Dong for their caring in my daily work. I also wanna express my gratitude for Dr.Yan and Dr.Ling for what they have taught me in the surgery room."}</p></div>
            <p className="lead text-left">
              {"In the ward, I have taken over several cases of idiopathic normal intracranial pressure hydrocephalus(iNPH), which is an essential differential diagnosis of Parkinson's syndrome. Connecting cases from neurology and neurosurgery allows me to apprehend the enchantment of medicine."}
            </p>
          </div>
        </div>
      </div>
      <p className="display-6 pb-3 text-center">{"Medical Genetics Department"}</p>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="row justify-content-center"><p className="lead text-left col-10">{"When I came here—— the first rare disease ward in China, I clearly remember various varieties of disease types listed on the computer. Wilson's disease, Huntington's disease, Spinal Muscular Atrophy, SpinocerebellarAataxia, Amyotrophic lateral sclerosis...I didn't even knew some of the names, but when I finished my rotation here, I could make preliminary diagnoses for the vast majority of diseases."}</p></div>
        </div>
        <div className="col-4 d-none d-lg-block text-center">
          <ImageWithCaption
            src={require("../../editable-stuff/pic5.png")}
            description={"My friends (the resident doctors) and I in the group celebrated Dr. Yu's birthday."}
            width={360}
          />
        </div>
      </div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{"Sure, it's all credit to my superior doctors, director Wu, attending doctors (Dr. Liu&Dr.Ni&Dr.Dong) and fellow doctors(Dr.Yu), who have helped me and taught me soooo much in my daily work! Thanks to Dr.Liu and Dr.Yang, I Learned to perform various special staining and observation on muscle specimens(which were extracted from patients' biceps brachii), as well as extract and cultivate fibroblasts from human skin specimens."}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{"Here are some popular science articles on the official account during my rotation:"}</p></div>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">
          <ul>
            <div>
              <a
                href="https://mp.weixin.qq.com/s/lNhIrVC7T37ZSOgqwhyljQ" 
                target="_blank"
                rel="noreferrer"
                style={{ 
                  fontFamily: 'Roboto, sans-serif',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >
                {"Rare diseases are never rare, we wanna say..."}
              </a>
            </div>
            <div>
              <a
                href="https://mp.weixin.qq.com/s/o2Ch3TxXmcjV2VvgYr4sDA" 
                target="_blank"
                rel="noreferrer"
                style={{ 
                  fontFamily: 'Roboto, sans-serif',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >
                {"A misdiagnosis case: Ten years of lumbar spine disease landed me in the ICU"}
              </a>
            </div>
            <div>
              <a
                href="https://mp.weixin.qq.com/s/QqRnZz-YjxxdBAS2sSxEEQ" 
                target="_blank"
                rel="noreferrer"
                style={{ 
                  fontFamily: 'Roboto, sans-serif',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >
                {"Multi-organ failure in a 19-year-old after eating snakes: Muscle biopsy has a say!"}
              </a>
            </div>
          </ul>
        </p>
      </div>

      <p className="display-6 pb-3 text-center">{"Emergency Room"}</p>
      <div className="row justify-content-center"><p className="lead text-left col-10">{"As one of the most busy places in the hospital, it's also a locale that can immensely temper the clinical skills of young physicians. Within 2 months, I have learned the initial diagnosis and treatment of a lot diseases such as STEMI, Paroxysmal supraventricular tachycardia, Hypokalemic periodic paralysis and so on. With the great honor to serve as a temporary guidance resident physician for international students, I am passionate about chatting with medicine students from German, Sri Lanka and India. Meanwhile, I also gained some soft skills such as communication, scheduling and teamwork, which laid a solid foundation for my working in other departments."}</p></div>
    </Jumbotron>
  );
};

export default WorkingExperience;
