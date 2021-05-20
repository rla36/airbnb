import UIKit
import FSCalendar

class CalendarViewController: UIViewController {
    
    @IBOutlet var calendarView: FSCalendar!
    private var checkIn: Date?
    private var checkOut: Date?
    
    fileprivate let formatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.dateFormat = "MM-dd-YYYY"
        return formatter
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setup()
        calendarView.dataSource = self
        calendarView.delegate = self
    }
    
    private func setup() {
        calendarView.allowsMultipleSelection = true
        calendarView.scrollDirection = .vertical
        
        calendarView.appearance.selectionColor = .darkGray
        
        calendarView.headerHeight = 50
        calendarView.appearance.headerMinimumDissolvedAlpha = 0.0
        calendarView.appearance.headerDateFormat = "YYYY년 M월"
        calendarView.appearance.headerTitleColor = .black
        calendarView.appearance.headerTitleFont = UIFont.systemFont(ofSize: 20, weight: .bold)
        calendarView.appearance.headerTitleAlignment = .left
        
        //        calendar.locale = Locale(identifier: "en_KR")
        calendarView.appearance.weekdayTextColor = .black
        calendarView.calendarWeekdayView.weekdayLabels[0].text = "일"
        calendarView.calendarWeekdayView.weekdayLabels[1].text = "월"
        calendarView.calendarWeekdayView.weekdayLabels[2].text = "화"
        calendarView.calendarWeekdayView.weekdayLabels[3].text = "수"
        calendarView.calendarWeekdayView.weekdayLabels[4].text = "목"
        calendarView.calendarWeekdayView.weekdayLabels[5].text = "금"
        calendarView.calendarWeekdayView.weekdayLabels[6].text = "토"
        calendarView.appearance.selectionColor = #colorLiteral(red: 0.9215686275, green: 0.2431372549, blue: 0.137254902, alpha: 1)
        
        
        calendarView.today = nil
    }
}

extension CalendarViewController: FSCalendarDelegate, FSCalendarDataSource {
    
    func calendar(_ calendar: FSCalendar, shouldSelect date: Date, at monthPosition: FSCalendarMonthPosition) -> Bool {
        return !date.isPast
    }
    
    func calendar(_ calendar: FSCalendar, didSelect date: Date, at monthPosition: FSCalendarMonthPosition) {
        
        if calendar.selectedDates.count > 2 {
            calendar.deselect(calendar.selectedDates[0])
            calendar.deselect(calendar.selectedDates[0])
        } else if calendar.selectedDates.count == 2 {
            if Calendar.current.compare(calendar.selectedDates[0], to: calendar.selectedDates[1], toGranularity: .day) == .orderedDescending {
                calendar.deselect(calendar.selectedDates[0])
            }
        }
        
        checkIn = calendar.selectedDates[0]
        checkOut = calendar.selectedDates[1]
        
//        var startTemp: Date!
//        if calendar.selectedDates.count == 2 {
//            if calendar.selectedDates[0] < calendar.selectedDates[1]{
//                startTemp = calendar.selectedDates[0]
//                while startTemp < calendar.selectedDates[1]-86400{
//                    startTemp += 86400
//                    calendar.select(startTemp)
//                }
//                startTemp = nil
//            }
//            else{
//                startTemp = calendar.selectedDates[1]
//                while startTemp < calendar.selectedDates[0] - 86400{
//                    startTemp += 86400
//                    calendar.select(startTemp)
//                }
//            }
//        }
    }
}

extension CalendarViewController: FSCalendarDelegateAppearance {
    func calendar(_ calendar: FSCalendar, appearance: FSCalendarAppearance, titleDefaultColorFor date: Date) -> UIColor? {
        if date.isPast {
            return .systemGray2
        } else {
            return nil
        }
    }
}

extension Date {
    var isPast: Bool {
        let ret = Calendar.current.compare(self, to: Date(), toGranularity: .day)
        return ret == .orderedAscending
    }
}
