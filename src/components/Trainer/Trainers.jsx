import SectionTitle from '../SectionTitle';
import TrainerCard from './TrainerCard';
import { trainersData } from '../../data/trainers';

const Trainers = () => {
  return (
    <section id="trainers" className="relative py-20 sm:py-28 bg-zinc-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="WORLD-CLASS COACHING"
          title="MEET OUR MASTER"
          highlight="TRAINERS"
          subtitle="Our certified exercise physiologists and competitive athletes provide 1-on-1 guidance to accelerate your physical achievements."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, index) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
