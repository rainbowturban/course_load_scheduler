package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;


public class AdminCalendarPresenterImpl extends BasePresenterImpl implements AdminCalendarPresenter
{
	private IndexPresenter parentPresenter;
	private AdminCalendarView view;

	@Inject
	public AdminCalendarPresenterImpl(IndexPresenter parentPresenter, AdminCalendarView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		fillInfo();
		fillRequests();
		fillCourseInfo();
		fillCalendar();
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		registration = eventBus.addHandler(LoadScheduleEvent.TYPE, this);
		eventBusRegistration.put(LoadScheduleEvent.TYPE, registration);
	}
		
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public AdminCalendarView getView()
	{
		return view;
	}
	
	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}

	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}
	
	@Override
	public void fillCalendar() {
		Grid calendar = view.getCalendarGrid();
		calendar.clear();
		calendar.resizeRows(2);
		List<StartTime> startTimes = getStartTimes();
		Iterator<StartTime> startTimesIterator = startTimes.iterator();
		while(startTimesIterator.hasNext()) {
			StartTime startTimeInfo = startTimesIterator.next();
			calendar.insertRow(calendar.getRowCount());
			calendar.setWidget(calendar.getRowCount()-1, 0, new Label(startTimeInfo.getTime().toString()));
		}
		calendar.removeRow(1);
	}
	
	@Override
	public void fillCourseInfo() {
		ListBox startTimeSelect = view.getStartTimeSelectBox();
		startTimeSelect.clear();
		List<StartTime> startTimes = getStartTimes();
		Iterator<StartTime> startTimesIterator = startTimes.iterator();
		while(startTimesIterator.hasNext()) {
			StartTime startTimeInfo = startTimesIterator.next();
			startTimeSelect.addItem(startTimeInfo.getTime().toString());
		}
		ListBox endTimeSelect = view.getEndTimeSelectBox();
		endTimeSelect.clear();
		List<EndTime> endTimes = getEndTimes();
		Iterator<EndTime> endTimesIterator = endTimes.iterator();
		while(endTimesIterator.hasNext()) {
			EndTime endTimeInfo = endTimesIterator.next();
			endTimeSelect.addItem(endTimeInfo.getTime().toString());
		}
		ListBox instructorSelect = view.getCourseInstrutorSelectBox();
		instructorSelect.clear();
		List<Faculty> roster = getRoster();
		Iterator<Faculty> rosterIterator = roster.iterator();
		while(rosterIterator.hasNext()) {
			Faculty facultyInfo = rosterIterator.next();
			instructorSelect.addItem(facultyInfo.getFirstName() + " " + facultyInfo.getLastName());
		}
	}
	
	@Override
	public List<EndTime> getEndTimes() {
		List<EndTime> endTimes = new ArrayList<EndTime>();
		EndTime time8 = new EndTime();
		time8.setId(1);
		time8.setTime(new Time(31800000));
		EndTime time9 = new EndTime();
		time9.setId(2);
		time9.setTime(new Time(35400000));
		EndTime time10 = new EndTime();
		time10.setId(3);
		time10.setTime(new Time(39000000));
		EndTime time11 = new EndTime();
		time11.setId(4);
		time11.setTime(new Time(42600000));
		EndTime time12 = new EndTime();
		time12.setId(5);
		time12.setTime(new Time(46200000));
		EndTime time13 = new EndTime();
		time13.setId(6);
		time13.setTime(new Time(49800000));
		EndTime time14 = new EndTime();
		time14.setId(7);
		time14.setTime(new Time(53400000));
		EndTime time15 = new EndTime();
		time15.setId(8);
		time15.setTime(new Time(57000000));
		EndTime time16 = new EndTime();
		time16.setId(9);
		time16.setTime(new Time(60600000));
		endTimes.add(time8);
		endTimes.add(time9);
		endTimes.add(time10);
		endTimes.add(time11);
		endTimes.add(time12);
		endTimes.add(time13);
		endTimes.add(time14);
		endTimes.add(time15);
		endTimes.add(time16);
		return endTimes;
	}

	@Override
	public List<StartTime> getStartTimes() {
		List<StartTime> startTimes = new ArrayList<StartTime>();
		StartTime time8 = new StartTime();
		time8.setId(1);
		time8.setTime(new Time(28800000));
		StartTime time9 = new StartTime();
		time9.setId(2);
		time9.setTime(new Time(32400000));
		StartTime time10 = new StartTime();
		time10.setId(3);
		time10.setTime(new Time(36000000));
		StartTime time11 = new StartTime();
		time11.setId(4);
		time11.setTime(new Time(39600000));
		StartTime time12 = new StartTime();
		time12.setId(5);
		time12.setTime(new Time(43200000));
		StartTime time13 = new StartTime();
		time13.setId(6);
		time13.setTime(new Time(46800000));
		StartTime time14 = new StartTime();
		time14.setId(7);
		time14.setTime(new Time(50400000));
		StartTime time15 = new StartTime();
		time15.setId(8);
		time15.setTime(new Time(54000000));
		StartTime time16 = new StartTime();
		time16.setId(9);
		time16.setTime(new Time(57600000));
		startTimes.add(time8);
		startTimes.add(time9);
		startTimes.add(time10);
		startTimes.add(time11);
		startTimes.add(time12);
		startTimes.add(time13);
		startTimes.add(time14);
		startTimes.add(time15);
		startTimes.add(time16);
		return startTimes;
	}

	@Override
	public List<Faculty> getRoster() {
		List<Faculty> roster = new ArrayList<Faculty>();
		Faculty faculty1 = new Faculty();
		faculty1.setId(1);
		faculty1.setFirstName("Douglas");
		faculty1.setLastName("Selent");
		faculty1.setEmail("dselent@wpi.edu");
		faculty1.setFacultyTypeId(1);
		faculty1.setCreatedAt(new Timestamp(0));
		faculty1.setUpdatedAt(new Timestamp(0));
		faculty1.setDeleted(false);
		roster.add(faculty1);
		
		Faculty faculty2 = new Faculty();
		faculty2.setId(2);
		faculty2.setFirstName("Michael");
		faculty2.setLastName("Ciaraldi");
		faculty2.setEmail("mciaraldi@wpi.edu");
		faculty2.setFacultyTypeId(1);
		faculty2.setCreatedAt(new Timestamp(0));
		faculty2.setUpdatedAt(new Timestamp(0));
		faculty2.setDeleted(false);
		roster.add(faculty2);
		
		Faculty faculty3 = new Faculty();
		faculty3.setId(3);
		faculty3.setFirstName("Peter");
		faculty3.setLastName("Christopher");
		faculty3.setEmail("pchristopher@wpi.edu");
		faculty3.setFacultyTypeId(2);
		faculty3.setCreatedAt(new Timestamp(0));
		faculty3.setUpdatedAt(new Timestamp(0));
		faculty3.setDeleted(false);
		roster.add(faculty3);
		return roster;
	}
	
	@Override
	public void fillInfo() {
		ListBox viewSelect = view.getScheduleSelectBox();
		viewSelect.clear();
		List<Faculty> roster = getRoster();
		Iterator<Faculty> rosterIterator = roster.iterator();
		while(rosterIterator.hasNext()) {
			Faculty facultyInfo = rosterIterator.next();
			viewSelect.addItem(facultyInfo.getFirstName() + " " + facultyInfo.getLastName());
		}
		ListBox termSelect = view.getTermSelectBox();
		List<Terms> terms = getTerms();
		Iterator<Terms> termsIterator = terms.iterator();
		while(termsIterator.hasNext()) {
			Terms termInfo = termsIterator.next();
			termSelect.addItem(termInfo.getName());
		}
	}
	
	@Override
	public List<Terms> getTerms() {
		List<Terms> termList = new ArrayList<Terms>();
		Terms terma = new Terms();
		terma.setId(1);
		terma.setName("A");
		termList.add(terma);
		Terms termb = new Terms();
		termb.setId(1);
		termb.setName("B");
		termList.add(termb);
		Terms termf = new Terms();
		termf.setId(1);
		termf.setName("F");
		termList.add(termf);
		Terms termc = new Terms();
		termc.setId(1);
		termc.setName("C");
		termList.add(termc);
		Terms termd = new Terms();
		termd.setId(1);
		termd.setName("D");
		termList.add(termd);
		Terms terms = new Terms();
		terms.setId(1);
		terms.setName("S");
		termList.add(terms);
		Terms terme1 = new Terms();
		terme1.setId(1);
		terme1.setName("E1");
		termList.add(terme1);
		Terms terme2 = new Terms();
		terme2.setId(1);
		terme2.setName("E2");
		termList.add(terme2);
		return termList;
	}

	@Override
	public List<RequestTables> retrieveRequests() {
		List<RequestTables> requests = new ArrayList<RequestTables>();		

		//TODO: instead of this, access DB to get courses
		RequestTables request1 = new RequestTables();
		request1.setCoursesNumber("CS3733");
		request1.setCoursesTitle("Software Engineering");
		request1.setStartTime(null);
		request1.setRequestOtherMessage("Please give me this class in this term");
		request1.setRequestStatus("Approved");
		request1.setRequestsId(1);
		request1.setRequestsUserId(1);
		request1.setEndTime(null);
		request1.setTermsName("A");

		RequestTables request2 = new RequestTables();
		request2.setCoursesNumber(null);
		request2.setCoursesTitle(null);
		request2.setStartTime(new Time(32400000));
		request2.setRequestOtherMessage("Please give me a class between these times in this term");
		request2.setRequestStatus("Rejected");
		request2.setRequestsId(2);
		request2.setRequestsUserId(3);
		request2.setEndTime(new Time(35400000));
		request2.setTermsName("B");

		RequestTables request3 = new RequestTables();
		request3.setCoursesNumber("ES3011");
		request3.setCoursesTitle("Controls Engineering");
		request3.setStartTime(new Time(36000000));
		request3.setRequestOtherMessage("Give me this class at this time in this term");
		request3.setRequestStatus("Unresolved");
		request3.setRequestsId(3);
		request3.setRequestsUserId(2);
		request3.setEndTime(new Time(39000000));
		request3.setTermsName("D");

		requests.add(request1);
		requests.add(request2);
		requests.add(request3);

		return requests;
	}
	
	@Override
	public void fillRequests() {
		VerticalPanel panel = view.getRequestsPanel();
		panel.clear();

		List<RequestTables> requests = retrieveRequests();
		Iterator<RequestTables> iterator = requests.iterator();

		while(iterator.hasNext()) {
			VerticalPanel newPanel = new VerticalPanel();
			RequestTables requestInfo = iterator.next();
			HorizontalPanel userStatusPanel = new HorizontalPanel();
			Label userIdLabel = new Label(requestInfo.getRequestsUserId().toString());
			userStatusPanel.add(userIdLabel);
			userStatusPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
			Label statusLabel = new Label(requestInfo.getRequestStatus());
			statusLabel.setStyleName("request-status-" + requestInfo.getRequestStatus().toLowerCase());
			userStatusPanel.add(statusLabel);
			userStatusPanel.setWidth("100%");
			newPanel.add(userStatusPanel);
			if (requestInfo.getCoursesNumber() != null) {
				Label courseLabel = new Label("Course: " + requestInfo.getCoursesNumber() + " - " + requestInfo.getCoursesTitle());
				newPanel.add(courseLabel);
			}
			Label termsLabel = new Label("term: " + requestInfo.getTermsName());
			newPanel.add(termsLabel);
			if (requestInfo.getStartTime() != null) {
				Label startTimeLabel = new Label("start time: " + requestInfo.getStartTime());
				newPanel.add(startTimeLabel);
			}
			if (requestInfo.getEndTime() != null) {
				Label endTimeLabel = new Label("end time: " + requestInfo.getEndTime());
				newPanel.add(endTimeLabel);
			}
			if (requestInfo.getRequestOtherMessage() != null) {
				Label messageLabel = new Label("message: " + requestInfo.getRequestOtherMessage());
				newPanel.add(messageLabel);
			}
			newPanel.setBorderWidth(5);
			panel.add(newPanel);
		}

		//view.setCourseList(panel);
	}
	
	//loads the home page
    @Override
    public void loadHomePage() {
    	eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction(true)));
    }
    //loads schedule page
    @Override
    public void loadSchedulePage() {
        eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction(true)));
    }
    
    //loads courses page (viewing)
    @Override
    public void loadViewCoursesPage() {
        eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(true)));
    }
    
    //loads account page
    @Override
    public void loadAccountPage() {
    	eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction(true)));
    }
    
    @Override
	public void onLoadSchedulePage(LoadScheduleEvent evt) {
		if(evt.getAction().getAdminUser()) {//if not admin, should not load the page
			//initialize stuff
			fillInfo();
			fillRequests();
			
			this.go(parentPresenter.getView().getViewRootPanel());
		}
	}
}