export const ContactSection = () => {
  return (
    <section className="h-120 text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.3937185210361!2d-68.85935883217944!3d-32.86334158755697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091a3b3468b7%3A0xcd6065e496b19133!2sORANCH%20BARBER!5e0!3m2!1ses!2sar!4v1746227924177!5m2!1ses!2sar"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
    </section>
  );
};
