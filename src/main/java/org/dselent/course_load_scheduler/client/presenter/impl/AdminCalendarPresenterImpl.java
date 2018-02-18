package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;
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
		
		//registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
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
		Iterator<Faculty> iterator = roster.iterator();
		while(iterator.hasNext()) {
			Faculty facultyInfo = iterator.next();
			viewSelect.addItem(facultyInfo.getFirstName() + " " + facultyInfo.getLastName());
		}		
		ListBox yearSelect = view.getYearSelectBox();
		ListBox termSelect = view.getTermSelectBox();
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
	
	//loads the home page (TODO: work out parameters, determine between Admin/User??)
    @Override
    public void loadHomePage() {/*
        //TODO: Should this be an event?
        //event would have information as follows?: If user is admin (although they should be),
        final Injector injector = Injector.INSTANCE;
        HomePresenterImpl homePresenter = injector.getHomePresenter();
        homePresenter.init();
        homePresenter.go(parentPresenter.getView().getViewRootPanel());*/
    }
    //loads schedule page (TODO: work out parameters, determine between Admin/User??)
    @Override
    public void loadSchedulePage() {/*
        //TODO: Should this be an event?
        //event would have information as follows?: If user is admin (although they should be),
        final Injector injector = Injector.INSTANCE;
        SchedulePresenterImpl schedulePresenter = injector.getSchedulePresenter();
        schedulePresenter.init();
        schedulePresenter.go(parentPresenter.getView().getViewRootPanel());*/
    }
    
    //loads courses page (viewing) (TODO: work out parameters, determine between Admin/User??)
    @Override
    public void loadViewCoursesPage() {
        //TODO: Should this be an event?
        //event would have information as follows?: If user is admin (although they should be),
        final Injector injector = Injector.INSTANCE;
        ViewCoursesPresenterImpl viewCoursesPresenter = injector.getViewCoursesPresenter();
        viewCoursesPresenter.init();
        viewCoursesPresenter.go(parentPresenter.getView().getViewRootPanel());
    }
    
    //loads account page (TODO: work out parameters, determine between Admin/User??)
    @Override
    public void loadAccountPage() {/*
        //TODO: Should this be an event?
        //event would have information as follows?: If user is admin (although they should be),
        final Injector injector = Injector.INSTANCE;
        AccountPresenterImpl accountPresenter = injector.getAccountPresenter();
        accountPresenter.init();
        accountPresenter.go(parentPresenter.getView().getViewRootPanel());*/
    }
}