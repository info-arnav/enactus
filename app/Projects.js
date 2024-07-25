import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="projects-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 1000, textAlign: "center" }}>
        <h1
          style={{ fontSize: 50, textAlign: "center" }}
          className="trans-title"
        >
          Our Projects ?
        </h1>
        <p style={{ fontWeight: 600 }}>Empowering change through action.</p>
        <div
          className="mt"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 60,
            justifyContent: "center",
          }}
        >
          <div
            className="r"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 350,
                }}
              >
                <Image
                  src="/assets/logo_hands.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="card"
                >
                  <p>
                    <b>Annotsav</b>
                    <br></br>Annotsav empowers farmers and gardeners with smart
                    irrigation solutions, conserving water and improving crop
                    yields.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 350,
                }}
              >
                <Image
                  src="/assets/raw/agni.jpg"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="card"
                >
                  <p>
                    <b>Agni</b>
                    <br></br>Agni symbolizes the passion and resilience of
                    Indian women and the heroic legacy of our decommissioned
                    fire-hoses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="r"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 350,
                }}
              >
                <Image
                  src="/assets/raw/clair.jpg"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="card"
                >
                  <p>
                    <b>Clair</b>
                    <br></br>
                    Project CLAIR aims to ensure clean air for all by tackling
                    air pollution and improving indoor air quality.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 350,
                }}
              >
                <Image
                  src="/assets/raw/urja.jpg"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="card"
                >
                  <p>
                    <b>Urja</b>
                    <br></br>
                    Project Urja harnesses alternative energy to cut carbon
                    emissions and enhance air quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
