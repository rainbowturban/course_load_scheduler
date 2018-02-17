package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.RequestTables;
import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
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
	public List<RequestTables> retrieveRequests() {
		List<RequestTables> requests = new ArrayList<RequestTables>();		

		//TODO: instead of this, access DB to get courses
		RequestTables request1 = new RequestTables();
		request1.setCoursesNumber("CS3733");
		request1.setCoursesTitle("Software Engineering");
		request1.setEndTime(null);
		request1.setRequestOtherMessage("Please give me this class in this term");
		request1.setRequestStatus("Approved");
		request1.setRequestsId(1);
		request1.setRequestsUserId(1);
		request1.setStartTime(null);
		request1.setTermsName("A");

		RequestTables request2 = new RequestTables();
		request2.setCoursesNumber(null);
		request2.setCoursesTitle(null);
		request2.setEndTime(new Time(32400));
		request2.setRequestOtherMessage("Please give me a class between these times in this term");
		request2.setRequestStatus("Rejected");
		request2.setRequestsId(2);
		request2.setRequestsUserId(3);
		request2.setStartTime(new Time(35400));
		request2.setTermsName("B");

		RequestTables request3 = new RequestTables();
		request3.setCoursesNumber("ES3011");
		request3.setCoursesTitle("Controls Engineering");
		request3.setEndTime(new Time(36000));
		request3.setRequestOtherMessage("Give me this class at this time in this term");
		request3.setRequestStatus("Unresolved");
		request3.setRequestsId(3);
		request3.setRequestsUserId(2);
		request3.setStartTime(new Time(39000));
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
			RequestTables requestInfo = iterator.next();
			Label userIdLabel = new Label("user id: " + requestInfo.getRequestsUserId());
			panel.add(userIdLabel);
			Label statusLabel = new Label("status: " + requestInfo.getRequestStatus());
			panel.add(statusLabel);
			if (requestInfo.getCoursesNumber() != null) {
				Label courseNumberLabel = new Label("course number: " + requestInfo.getCoursesNumber());
				panel.add(courseNumberLabel);
				Label courseTitleLabel = new Label("course name: " + requestInfo.getCoursesTitle());
				panel.add(courseTitleLabel);
			}
			Label termsLabel = new Label("term: " + requestInfo.getTermsName());
			panel.add(termsLabel);
			if (requestInfo.getStartTime() != null) {
				Label startTimeLabel = new Label("start time: " + requestInfo.getStartTime());
				panel.add(startTimeLabel);
			}
			if (requestInfo.getEndTime() != null) {
				Label endTimeLabel = new Label("end time: " + requestInfo.getEndTime());
				panel.add(endTimeLabel);
			}
			if (requestInfo.getRequestOtherMessage() != null) {
				Label messageLabel = new Label("message: " + requestInfo.getRequestOtherMessage());
				panel.add(messageLabel);
			}
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