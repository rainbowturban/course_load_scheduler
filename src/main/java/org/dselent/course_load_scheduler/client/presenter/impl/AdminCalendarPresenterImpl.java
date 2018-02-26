package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.action.ReceiveEndTimesAction;
import org.dselent.course_load_scheduler.client.action.ReceiveStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.FlexTable;
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
	private List<StartTime> globalStartTimes;
	private List<EndTime> globalEndTimes;
	private List<Faculty> globalRoster;
	private List<Terms> globalTerms;
	private List<RequestTables> globalRequests;

	@Inject
	public AdminCalendarPresenterImpl(IndexPresenter parentPresenter, AdminCalendarView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		globalStartTimes = null;
		globalEndTimes = null;
		globalRoster = null;
		globalTerms = null;
		globalRequests = null;
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

		registration = eventBus.addHandler(ReceiveStartTimesEvent.TYPE, this);
		eventBusRegistration.put(ReceiveStartTimesEvent.TYPE, registration);
	}
		
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}
	
	@Override
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {
		ReceiveStartTimesAction action = evt.getAction();
		globalStartTimes = action.getStartTimes();
		updateUi();
	}
	
	@Override
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {
		ReceiveEndTimesAction action = evt.getAction();
		globalEndTimes = action.getEndTimes();
		updateUi();
	}
	
	@Override
	public void updateUi() {
		if (globalStartTimes != null && globalEndTimes != null && globalRoster != null) {
			fillCourseInfo();
		}
		if (globalStartTimes != null) {
			fillCalendarHeader();
		}
		if (globalTerms != null && globalRoster != null) {
			fillInfo();
		}
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
	public void fillCalendarWithCourses() {
		FlexTable calendar = view.getFlexCalendar();
		// TODO
	}
	
	@Override
	public void fillCalendarHeader() {
		view.getTabPanel().selectTab(0);
		
		FlexTable calendar = view.getFlexCalendar();
		calendar.clear();
		String[] columnHeaders = {"Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
		for(int i=0; i<columnHeaders.length; i++) {
			calendar.setWidget(0, i, new Label(columnHeaders[i]));
		}
		Iterator<StartTime> startTimesIterator = globalStartTimes.iterator();
		while(startTimesIterator.hasNext()) {
			StartTime startTimeInfo = startTimesIterator.next();
			calendar.insertRow(calendar.getRowCount());
			calendar.setWidget(calendar.getRowCount()-1, 0, new Label(startTimeInfo.getTime().toString()));
		}
	}
	
	@Override
	public void fillCourseInfo() {
		ListBox startTimeSelect = view.getStartTimeSelectBox();
		startTimeSelect.clear();
		Iterator<StartTime> startTimesIterator = globalStartTimes.iterator();
		while(startTimesIterator.hasNext()) {
			StartTime startTimeInfo = startTimesIterator.next();
			startTimeSelect.addItem(startTimeInfo.getTime().toString());
		}
		
		ListBox endTimeSelect = view.getEndTimeSelectBox();
		endTimeSelect.clear();
		Iterator<EndTime> endTimesIterator = globalEndTimes.iterator();
		while(endTimesIterator.hasNext()) {
			EndTime endTimeInfo = endTimesIterator.next();
			endTimeSelect.addItem(endTimeInfo.getTime().toString());
		}
		
		ListBox instructorSelect = view.getCourseInstrutorSelectBox();
		instructorSelect.clear();
		Iterator<Faculty> rosterIterator = globalRoster.iterator();
		while(rosterIterator.hasNext()) {
			Faculty facultyInfo = rosterIterator.next();
			instructorSelect.addItem(facultyInfo.getFirstName() + " " + facultyInfo.getLastName());
		}
	}
	
	@Override
	public void getEndTimes() {
		User temp = new User();
		temp.setAccountTypeId(1);
		temp.setId(1);
		temp.setPassword("derp");
		eventBus.fireEvent(new SendGetEndTimesEvent(new SendGetEndTimesAction(temp)));
	}

	@Override
	public void getStartTimes() {
		User temp = new User();
		temp.setAccountTypeId(1);
		temp.setId(1);
		temp.setPassword("derp");
		eventBus.fireEvent(new SendGetStartTimesEvent(new SendGetStartTimesAction(temp)));
	}

	@Override
	public void getRoster() {
		// TODO
		Faculty faculty1 = new Faculty();
		faculty1.setId(1);
		faculty1.setFirstName("Douglas");
		faculty1.setLastName("Selent");
		faculty1.setEmail("dselent@wpi.edu");
		faculty1.setFacultyTypeId(1);
		faculty1.setCreatedAt(new Timestamp(0));
		faculty1.setUpdatedAt(new Timestamp(0));
		faculty1.setDeleted(false);
		globalRoster.add(faculty1);
		
		Faculty faculty2 = new Faculty();
		faculty2.setId(2);
		faculty2.setFirstName("Michael");
		faculty2.setLastName("Ciaraldi");
		faculty2.setEmail("mciaraldi@wpi.edu");
		faculty2.setFacultyTypeId(1);
		faculty2.setCreatedAt(new Timestamp(0));
		faculty2.setUpdatedAt(new Timestamp(0));
		faculty2.setDeleted(false);
		globalRoster.add(faculty2);
		
		Faculty faculty3 = new Faculty();
		faculty3.setId(3);
		faculty3.setFirstName("Peter");
		faculty3.setLastName("Christopher");
		faculty3.setEmail("pchristopher@wpi.edu");
		faculty3.setFacultyTypeId(2);
		faculty3.setCreatedAt(new Timestamp(0));
		faculty3.setUpdatedAt(new Timestamp(0));
		faculty3.setDeleted(false);
		globalRoster.add(faculty3);
	}
	
	@Override
	public void fillInfo() {
		ListBox viewSelect = view.getScheduleSelectBox();
		viewSelect.clear();
		Iterator<Faculty> rosterIterator = globalRoster.iterator();
		while(rosterIterator.hasNext()) {
			Faculty facultyInfo = rosterIterator.next();
			viewSelect.addItem(facultyInfo.getFirstName() + " " + facultyInfo.getLastName());
		}
		ListBox termSelect = view.getTermSelectBox();
		Iterator<Terms> termsIterator = globalTerms.iterator();
		while(termsIterator.hasNext()) {
			Terms termInfo = termsIterator.next();
			termSelect.addItem(termInfo.getName());
		}
	}
	
	@Override
	public void getTerms() {
		Terms terma = new Terms();
		terma.setId(1);
		terma.setName("A");
		globalTerms.add(terma);
		Terms termb = new Terms();
		termb.setId(1);
		termb.setName("B");
		globalTerms.add(termb);
		Terms termf = new Terms();
		termf.setId(1);
		termf.setName("F");
		globalTerms.add(termf);
		Terms termc = new Terms();
		termc.setId(1);
		termc.setName("C");
		globalTerms.add(termc);
		Terms termd = new Terms();
		termd.setId(1);
		termd.setName("D");
		globalTerms.add(termd);
		Terms terms = new Terms();
		terms.setId(1);
		terms.setName("S");
		globalTerms.add(terms);
		Terms terme1 = new Terms();
		terme1.setId(1);
		terme1.setName("E1");
		globalTerms.add(terme1);
		Terms terme2 = new Terms();
		terme2.setId(1);
		terme2.setName("E2");
		globalTerms.add(terme2);
	}

	@Override
	public void getRequests() {
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

		globalRequests.add(request1);
		globalRequests.add(request2);
		globalRequests.add(request3);
	}
	
	@Override
	public void fillRequests() {
		VerticalPanel panel = view.getRequestsPanel();
		panel.clear();

		Iterator<RequestTables> iterator = globalRequests.iterator();
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
			getStartTimes();
			getEndTimes();
			getRoster();
			getTerms();
			getRequests();
			
			this.go(parentPresenter.getView().getViewRootPanel());
		}
	}
}