using CodeCamper.Model;

namespace CodeCamper.Data.Contracts
{
    public interface ICodeCamperUow
    {
        // Save pending changes to the data store
        void Commit();

        // Repositories
        IPersonsRepository Persons { get; }
        IRepository<Room> Rooms { get; }
        ISessionsRepository Sessions { get; }
        IRepository<TimeSlot> TimeSlots { get; }
        IAttendanceRepository Attendance { get; }
    }
}
