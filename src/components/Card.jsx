import React from "react";

function Card({ plans }) {
  return (
    <div className="">
      <div className="container-fluid row">
        {plans.map((plan) => (
          <div class="card col-3">
            <div className="plan" key={plan.name}>
              <div class="card-header">
                <h3 className="text-muted text-uppercase" id="title">
                  {plan.id}
                </h3>
                <h1 id="plan">{plan.price}</h1>
              </div>
              <div className="card-body">
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    {plan.no_of_users}
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    {plan.storage}
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    {plan.publicProjects} Public Projects
                  </li>
                  <li class={plan.projects}>
                    <span class="fa-li">
                      <i class={plan.project_class}></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li class={plan.phone}>
                    <span class="fa-li">
                      <i class={plan.phone_class}></i>
                    </span>{" "}
                    Unlimited Phone Support
                  </li>
                  <li class={plan.subdomain}>
                    <span class="fa-li">
                      <i class={plan.subdomain_class}></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li class={plan.reports}>
                    <span class="fa-li">
                      <i class={plan.reports_class}></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
              </div>
              <div className="button">
                <button class="btn rounded-pill btn-primary" type="button">
                  BUTTON
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
