import { useState } from "react";
import "./courses.css";

function Courses() {

  const course = {
    module1: {
      title: "Module 1: Python Basics",
      topic1: {
        title: "Introduction to Python",
        description: "Learn about Python fundamentals, syntax, and environment setup.",
        materials: [
          { type: "video", url: "https://www.youtube.com/" },
          { type: "article", url: "https://docs.python.org/3/" },
          { type: "article", url: "https://www.geeksforgeeks.org/python-programming-language/" }
        ],
        checklist: [
          "Install Python",
          "Understand Variables",
          "Write First Program"
        ]
      },
      topic2: {
        title: "Control Structures",
        description: "Learn if-else statements, loops, and logical operators.",
        materials: [
          { type: "video", url: "https://www.youtube.com/" },
          { type: "article", url: "https://docs.python.org/3/tutorial/controlflow.html" }
        ],
        checklist: [
          "Practice if-else",
          "Practice loops",
          "Solve 5 problems"
        ]
      }
    },

    module2: {
      title: "Module 2: Data Structures",
      topic1: {
        title: "Lists & Tuples",
        description: "Learn how to work with lists and tuples in Python.",
        materials: [],
        checklist: []
      },
      topic2: {
        title: "Dictionaries & Sets",
        description: "Understand key-value storage and unique collections.",
        materials: [],
        checklist: []
      }
    }
  };


  /* ================= STATE ================= */

  const [selectedModule, setSelectedModule] = useState("module1");
  const [selectedTopic, setSelectedTopic] = useState("topic1");
  const [step, setStep] = useState(1);

  const [checkedItems, setCheckedItems] = useState({});
  const [completedMaterials, setCompletedMaterials] = useState({});


  /* ================= GLOBAL TOPIC LIST ================= */

  const allTopics = Object.keys(course).flatMap(moduleKey =>
    Object.keys(course[moduleKey])
      .filter(key => key.startsWith("topic"))
      .map(topicKey => ({
        module: moduleKey,
        topic: topicKey
      }))
  );


  const currentIndex = allTopics.findIndex(
    t => t.module === selectedModule && t.topic === selectedTopic
  );


  /* ================= DATA ================= */

  const moduleData = course[selectedModule];
  const topicData = moduleData[selectedTopic];


  /* ================= FUNCTIONS ================= */

  const changeTopic = (moduleKey, topicKey) => {
    setSelectedModule(moduleKey);
    setSelectedTopic(topicKey);
    setStep(1);
    setCheckedItems({});
    setCompletedMaterials({});
  };


  const toggleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };


  const toggleMaterial = (index) => {
    setCompletedMaterials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  /* ================= UI ================= */

  return (
    <div className="course-wrapper">

      {/* ================= SIDEBAR ================= */}

      <div className="course-sidebar">

        {Object.keys(course).map(moduleKey => (

          <div key={moduleKey} className="module-block">

            <h4
              className={selectedModule === moduleKey ? "active-module" : ""}
              onClick={() => changeTopic(moduleKey, "topic1")}
            >
              {course[moduleKey].title}
            </h4>

            {selectedModule === moduleKey && (

              <ul>

                {Object.keys(course[moduleKey])
                  .filter(key => key.startsWith("topic"))
                  .map(topicKey => (

                    <li
                      key={topicKey}
                      className={selectedTopic === topicKey ? "active-topic" : ""}
                      onClick={() => changeTopic(moduleKey, topicKey)}
                    >
                      {course[moduleKey][topicKey].title}
                    </li>

                  ))}

              </ul>

            )}

          </div>

        ))}

      </div>



      {/* ================= MAIN CONTENT ================= */}

      <div className="course-content">


        {/* ===== GLOBAL PROGRESS TRACKER ===== */}

        <div className="topic-progress">

          {allTopics.map((item, index) => (

            <div
              key={index}
              className="progress-step"
              onClick={() => changeTopic(item.module, item.topic)}
            >

              <div
                className={`progress-circle ${
                  index <= currentIndex ? "active" : ""
                }`}
              />

              {index < allTopics.length - 1 && (

                <div
                  className={`progress-line ${
                    index < currentIndex ? "active" : ""
                  }`}
                />

              )}

            </div>

          ))}

        </div>



        {/* ===== STEP 1 : DESCRIPTION ===== */}

        {step === 1 && (

          <div className="description-box">

            <h2>{topicData.title}</h2>
            <p>{topicData.description}</p>

            <button
              className="continue-btn"
              onClick={() => setStep(2)}
            >
              Continue →
            </button>

          </div>

        )}



        {/* ===== STEP 2 : MATERIALS ===== */}

        {step === 2 && (

          <div className="materials-section">

            <h3>Learning Materials</h3>

            {topicData.materials.map((mat, index) => (

              <div key={index} className="material-card">

                <div>

                  <span className={`material-type ${mat.type}`}>
                    {mat.type.toUpperCase()}
                  </span>

                  <a href={mat.url} target="_blank" rel="noreferrer">
                    View Resource
                  </a>

                </div>

                <input
                  type="checkbox"
                  checked={completedMaterials[index] || false}
                  onChange={() => toggleMaterial(index)}
                />

              </div>

            ))}

            <button
              className="continue-btn"
              onClick={() => setStep(3)}
            >
              Continue →
            </button>

          </div>

        )}



        {/* ===== STEP 3 : CHECKLIST ===== */}

        {step === 3 && (

          <div className="checklist-section">

            <h3>Checklist</h3>

            <ul className="interactive-checklist">

              {topicData.checklist.map((item, i) => (

                <li key={i}>

                  <label className="check-item">

                    <input
                      type="checkbox"
                      checked={checkedItems[item] || false}
                      onChange={() => toggleCheck(item)}
                    />

                    <span className={checkedItems[item] ? "checked" : ""}>
                      {item}
                    </span>

                  </label>

                </li>

              ))}

            </ul>

          </div>

        )}

      </div>

    </div>
  );
}

export default Courses;