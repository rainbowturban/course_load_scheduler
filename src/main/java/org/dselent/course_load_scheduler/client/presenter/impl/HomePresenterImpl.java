package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.action.SendGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetOneFacultySectionInfoEvent;
import org.dselent.course_load_scheduler.client.event.SendGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.SendGetOneFacultySectionInfoEvent;
import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.presenter.HomePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.HomeView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.inject.Inject;

public class HomePresenterImpl extends BasePresenterImpl implements HomePresenter{

	private static List<Faculty> facultyListHolder;
	private static List<SectionsInfo> sectionListHolder;

	//private boolean adminUser = false;
	private IndexPresenter parentPresenter;
	private HomeView view;

	@Inject
	public HomePresenterImpl(IndexPresenter parentPresenter, HomeView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);

	}
	@Override
	public void bind()
	{
		HandlerRegistration registration;

		registration = eventBus.addHandler(LoadHomePageEvent.TYPE, this);
		eventBusRegistration.put(LoadHomePageEvent.TYPE, registration);
		registration = eventBus.addHandler(ReceiveGetOneFacultySectionInfoEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetOneFacultySectionInfoEvent.TYPE, registration);
		registration = eventBus.addHandler(ReceiveGetFacultyEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetFacultyEvent.TYPE, registration);

	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}
	public HomeView getView() {
		return view;
	}
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void loadAccountPage() {
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction()));
	}

	@Override
	public void loadHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction()));
	}
	@Override
	public void loadSchedulePage() {
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction()));
	}
	@Override
	public void loadViewCoursesPage() {
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction())); 
	}

	@Override
	public void onLoadHomePage(LoadHomePageEvent evt) {
		retreiveFacultyList();
		//user = evt.getAction().getUser();
		this.go(parentPresenter.getView().getViewRootPanel());
		Injector.INSTANCE.getIndexPresenter().hideLoadScreen();
	}

	private void retreiveFacultyList() {
		//Sends event to DB to fetch frequencies
		eventBus.fireEvent(new SendGetFacultyEvent(new SendGetFacultyAction()));
	}
	private void retreiveOneFacultySectionInfo() {
		eventBus.fireEvent(new SendGetOneFacultySectionInfoEvent(new SendGetOneFacultySectionInfoAction()));
	}

	@Override
	public void onReceiveGetFaculty(ReceiveGetFacultyEvent evt) {
		//Window.alert("Received faculty list");
		facultyListHolder = evt.getAction().getList();
		retreiveOneFacultySectionInfo();
	}

	@Override
	public void onReceiveGetOneFacultySectionInfo(ReceiveGetOneFacultySectionInfoEvent evt) {
		//Window.alert("Received section info list");
		sectionListHolder = evt.getAction().getList();
		populateFacultyList();
	}

	/**
	 * Fills the faculty list panels with faculty and the courses they are scheduled to teach
	 * @param facultyList 
	 */
	private void populateFacultyList() {
		//Window.alert("Ready to populate");
		boolean hasCourses = false;
		//Get all the faculty
		VerticalPanel facultyVertPanel = view.getFacultyListVerticalPanel();
		facultyVertPanel.clear();
		HorizontalPanel titlePanel = view.getFacultyListTitlePanel();
		facultyVertPanel.add(titlePanel);

		/*~~~~~~NEW LOOP~~~~~~
		//iterate through the list of faculty
		for(SectionsInfo s : sectionListHolder) {
			HorizontalPanel courseList = new HorizontalPanel();
			Label numCourses;
			Label courseInfo;

			//Check if the faculty has courses assigned
			for (Faculty f : facultyListHolder){
				hasCourses = false;
				Label name = new Label("" + f.getLastName() + ", " + f.getFirstName());
				//name.setStyleName("faculty-name");
				courseList.add(name);
				if(s.getFacultyId() == f.getId()) {
					hasCourses = true;
					courseInfo = new Label("" + s.getCoursesTitle() + "  " + s.getTermsName());
					courseList.add(courseInfo);
				}else {
					courseInfo = new Label("");
				}
				if(hasCourses)
					numCourses = new Label("(" + (courseList.getWidgetCount()-1) + ")");
				else
					numCourses = new Label("");
				//numCourses.setStyleName("num-courses-label");
				courseList.insert(numCourses, 0);
				facultyVertPanel.add(courseList);
			}
		}*/

		//~~~~~~OLD (WORKING) LOOP~~~~~~
		//iterate through the list of faculty
		for(SectionsInfo s : sectionListHolder) {
			HorizontalPanel courseList = new HorizontalPanel();
			Label numCourses;
			Label courseInfo;

			//Check if the faculty has courses assigned
			for (Faculty f : facultyListHolder){
				if(s.getFacultyId() == f.getId()) {
					Label name = new Label("" + f.getLastName() + ", " + f.getFirstName());
					name.setStyleName("faculty-name");
					courseList.add(name);
					hasCourses = true;
					courseInfo = new Label("" + s.getCoursesTitle() + "  " + s.getTermsName());
					courseList.add(courseInfo);
				}
			}
			numCourses = new Label("(" + (courseList.getWidgetCount()-1) + ")");
			numCourses.setStyleName("num-courses-label");
			if(!hasCourses) {
				courseInfo = new Label("");
			}
			courseList.insert(numCourses, 0);
			facultyVertPanel.add(courseList);
		}
		//Window.alert("added vert panel to view");
		view.setFacultyListVerticalPanel(facultyVertPanel);
	}

	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}

}
