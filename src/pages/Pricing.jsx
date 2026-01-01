import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$7",
      credits: 150,
      description:
        "Perfect for individuals exploring creative tools for the first time.",
      features: [
        "Up to 30 Generations",
        "Access to Core Templates",
        "Essential AI Models",
        "Email-only Support",
        "Basic Performance Insights",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      price: "$25",
      credits: 600,
      description:
        "Designed for growing creators who need more flexibility and power.",
      features: [
        "Up to 120 Generations",
        "Custom Template Builder",
        "Pro AI Models",
        "Priority Email Support",
        "Detailed Performance Reports",
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "$79",
      credits: 1600,
      description:
        "Built for teams and businesses requiring maximum output and reliability.",
      features: [
        "Up to 350 Generations",
        "Team Collaboration Tools",
        "Premium AI Models",
        "24/7 Chat + Email Support",
        "Full Analytics Suite",
      ],
    },
  ];

  const handlePurchase = async (planId) => {
    console.log("Selected plan:", planId);
    // integrate payment later
  };

  return (
    <div className="w-full max-w-5xl mx-auto z-20 max-md:px-4">
      <div className=" px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {plans.map((plan) => {
            const isPopular = plan.id === "growth";

            return (
              <div
                key={plan.id}
                className={`
                  p-6 mx-auto w-full max-w-sm rounded-xl
                  bg-white/[0.04] backdrop-blur-md
                  border border-white/10
                  shadow-lg shadow-black/40
                  transition-all duration-300
                  hover:border-purple-500/30
                  ${isPopular ? "ring-1 ring-purple-500/30" : ""}
                `}
              >
                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="my-3">
                  <span className="text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-sm">
                    {" "} / {plan.credits} credits
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/65 mb-6 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => handlePurchase(plan.id)}
                  className={`
                    w-full py-2.5 rounded-md text-sm font-medium transition
                    ${
                      isPopular
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/30"
                        : "bg-white/[0.08] hover:bg-white/[0.12] text-white"
                    }
                  `}
                >
                  Buy Now
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Pricing;
