package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.action.SendGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetOneFacultySectionInfoEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.SendGetOneFacultySectionInfoEvent;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetTermsEvent;
import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;

public class AdminCalendarPresenterImpl extends BasePresenterImpl implements AdminCalendarPresenter
{
	private User user = new User();//the user object that is being passed around
	
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
		user.setAccountTypeId(2);
		user.setId(1);
		user.setEncryptedPassword("derp");
		
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
		
		registration = eventBus.addHandler(ReceiveEndTimesEvent.TYPE, this);
		eventBusRegistration.put(ReceiveEndTimesEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetFacultyEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetFacultyEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetTermsEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetTermsEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetOneFacultySectionInfoEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetOneFacultySectionInfoEvent.TYPE, registration);
	}
		
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}
	
	@Override
	public void onReceiveStartTimes(ReceiveStartTimesEvent evt) {
		globalStartTimes = evt.getAction().getStartTimes();
		updateUi();
	}
	
	@Override
	public void onReceiveEndTimes(ReceiveEndTimesEvent evt) {
		globalEndTimes = evt.getAction().getEndTimes();
		updateUi();
	}
	
	@Override
	public void onReceiveGetFaculty(ReceiveGetFacultyEvent evt) {
		globalRoster = evt.getAction().getList();
		updateUi();
	}
	
	@Override
	public void onReceiveGetTerms(ReceiveGetTermsEvent evt) {
		globalTerms = evt.getAction().getTerms();
		updateUi();
	}
	
	@Override
	public void updateUi() {
		if (globalStartTimes != null && globalEndTimes != null && globalRoster != null) {
			fillCourseInfo();
		}
		if (globalTerms != null && globalRoster != null) {
			fillInfo();
			getSections();
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
		eventBus.fireEvent(new SendGetEndTimesEvent(new SendGetEndTimesAction(user)));
	}

	@Override
	public void getStartTimes() {
		eventBus.fireEvent(new SendGetStartTimesEvent(new SendGetStartTimesAction(user)));
	}

	@Override
	public void getRoster() {
		eventBus.fireEvent(new SendGetFacultyEvent(new SendGetFacultyAction()));
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
		termSelect.clear();
		Iterator<Terms> termsIterator = globalTerms.iterator();
		while(termsIterator.hasNext()) {
			Terms termInfo = termsIterator.next();
			termSelect.addItem(termInfo.getName());
		}
	}
	
	@Override
	public void getTerms() {
		eventBus.fireEvent(new SendGetTermsEvent(new SendGetTermsAction()));
	}

	@Override
	public void getRequests() {
		globalRequests = new ArrayList<RequestTables>();
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
	public void getSections() {
		int facultyId = 1;
		int inst_ind = view.getScheduleSelectBox().getSelectedIndex();
		String instructor = view.getScheduleSelectBox().getItemText(inst_ind);
		Iterator<Faculty> rosterIterator = globalRoster.iterator();
		while(rosterIterator.hasNext()) {
			Faculty facultyInfo = rosterIterator.next();
			if ((facultyInfo.getFirstName() + " " + facultyInfo.getLastName()).equals(instructor)) {
				facultyId = facultyInfo.getId();
				break;
			}
		}
		int termsId = 1;
		String term = view.getTermSelectBox().getItemText(view.getTermSelectBox().getSelectedIndex());
		Iterator<Terms> termsIterator = globalTerms.iterator();
		while(termsIterator.hasNext()) {
			Terms termInfo = termsIterator.next();
			if (termInfo.getName().equals(term)) {
				termsId = termInfo.getId();
				break;
			}
		}
		eventBus.fireEvent(new SendGetOneFacultySectionInfoEvent(new SendGetOneFacultySectionInfoAction(facultyId, termsId)));
	}
	
	@Override
	public void onReceiveGetOneFacultySectionInfo(ReceiveGetOneFacultySectionInfoEvent evt) {
		view.getTablePanel().clear();
		Iterator<SectionsInfo> sectionIterator = evt.getAction().getList().iterator();
		while(sectionIterator.hasNext()) {
			SectionsInfo sectionInfo = sectionIterator.next();
			String title = sectionInfo.getCoursesNumber()+" - "+sectionInfo.getSectionsName();
			VerticalPanel body = new VerticalPanel();
			body.add(new Label("Title: "+sectionInfo.getCoursesTitle()));
			body.add(new Label("Start Time: "+sectionInfo.getStartTime()));
			body.add(new Label("End Time: "+sectionInfo.getEndTime()));
			body.add(new Label("Days: "+sectionInfo.getDays()));
			body.add(new Label("Section Type: "+sectionInfo.getSectionType()));
			view.getTablePanel().add(body, title);
		}
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
    	eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction(user)));
    }
    //loads schedule page
    @Override
    public void loadSchedulePage() {
        eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction(user)));
    }
    
    //loads courses page (viewing)
    @Override
    public void loadViewCoursesPage() {
        eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(user)));
    }
    
    //loads account page
    @Override
    public void loadAccountPage() {
    	eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction(user)));
    }
    
    @Override
	public void onLoadSchedulePage(LoadScheduleEvent evt) {
    	if(user.getAccountTypeId() == 2) {//if not admin, should not load the page
			getStartTimes();
			getEndTimes();
			getRoster();
			getTerms();
			getRequests();
			this.go(parentPresenter.getView().getViewRootPanel());
		}
	}
}