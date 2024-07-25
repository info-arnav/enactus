import Image from "next/image";

export default function StoryBanner() {
  return (
    <div
      className="story-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div
        className="table-break-700"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/raw/plant2.png"
            width={300}
            height={300}
            style={{ borderRadius: "100%" }}
          ></Image>
        </div>
        <div
          className="start"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontWeight: 500, marginBottom: 0 }}>
            The Story of <br></br>
            <span className="h1-span" style={{ fontSize: 72, fontWeight: 700 }}>
              Enactus
            </span>
          </h1>
          <p style={{ marginBottom: 10 }}>
            Our Journey began with a simple question:
          </p>
          <p
            style={{
              fontWeight: 600,
              marginBottom: 10,
              color: "rgb(253 155 99)",
            }}
          >
            How can we drive positive change in our community and beyond?
          </p>
          <p
            style={{
              marginBottom: 10,
            }}
          >
            Enactus NSUT was created to empower students with the tools and
            opportunities to create innovative solutions to pressing social,
            economic, and environmental challenges. Our mission is to transform
            lives and shape a sustainable future through entrepreneurial action.
          </p>
        </div>
      </div>
    </div>
  );
}
