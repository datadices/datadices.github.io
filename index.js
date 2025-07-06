    const services = [
    { title: "Cloud Data Pipelines", detail: "GCP, AWS, Azure" },
    { title: "Google Cloud", detail: "BigQuery, Cloud Run, Dataflow" },
    { title: "AWS", detail: "Lambda, S3, Redshift, Glue" },
    { title: "Azure", detail: "Synapse, Blob, Data Factory" },
    { title: "Data Visualization", detail: "Tableau, Power BI, Looker" },
    { title: "Metabase", detail: "Open-source dashboards" },
    { title: "Grafana", detail: "Monitoring and visualization" },
    { title: "Automation", detail: "Airflow, Jenkins, Terraform" },
    { title: "Monitoring", detail: "CloudWatch, Prometheus" },
    { title: "ML Models", detail: "Classification, Forecasting" },
    { title: "Data Prep", detail: "ETL, Cleaning, Aggregation" },
    { title: "MLOps", detail: "Deployment and CI/CD for ML" },
  ];
  
   let index = 0;
  const groupSize = 4;
  const slider = document.getElementById("service-slider");

  function renderServices() {
    slider.innerHTML = "";
    for (let i = 0; i < groupSize; i++) {
      const service = services[(index + i) % services.length];
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-dark">${service.title}</h5>
            <p class="card-text text-muted">${service.detail}</p>
          </div>
        </div>`;
      slider.appendChild(col);
    }
    index = (index + groupSize) % services.length;
  }

  renderServices();
  setInterval(renderServices, 2000);

  const missions = [
    "🚀 Empower businesses with data-driven insights",
    "🔐 Build scalable, secure, and cost-effective data solutions",
    "💡 Drive innovation through cutting-edge technologies"
  ];

  let index1 = 0;
  const missionText = document.getElementById("missionText");

  function showMission() {
    missionText.classList.remove("fade-in");
    setTimeout(() => {
      missionText.textContent = missions[index1];
      missionText.classList.add("fade-in");
      index1 = (index1 + 1) % missions.length;
    }, 500); // Let opacity reach 0 before switching
  }

  // Initial display
  showMission();
  setInterval(showMission, 3000);