function constructionCrew(worker) {
    if (worker.dizziness === true) {
      worker.levelOfHydrated += 0.1;
      worker.dizziness = false;
    }
    return worker;
}
