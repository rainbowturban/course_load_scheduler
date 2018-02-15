package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import org.dselent.course_load_scheduler.client.view.AddSectionView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.inject.Inject;

public class AddSectionPresenterImpl extends BasePresenterImpl implements AddSectionPresenter{
	private IndexPresenter parentPresenter;
	private AddSectionView view;
	
	@Inject
	public AddSectionPresenterImpl(IndexPresenter parentPresenter, AddSectionView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		fillSection();
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
		
		//button events for when they click on edit or remove buttons
//		registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
//		eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}
	
	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}
	
	@Override
	public AddSectionView getView() {
		return view;
	}
	
	//gets term, section type and section length info about sections
	@Override
	public List<SectionsInfo> retrieveSections(){
		
		
	}
	
	@Override
	public void fillSection() {
		
	}
	
	
//	//gets information about courses to fill the page with
//		@Override
//		public List<CourseInfo> retrieveCourses() {
//			//************get courses returned in a list of CourseInfo objects*****
//			
//			//**iterate through list, creating a grid row entry for each object?***
//			//^^This would probably implement the injector thing, whatever that actually does.
//			List<CourseInfo> courses = new ArrayList<CourseInfo>();
//			
//			CourseInfo course1 = new CourseInfo();
//			course1.setCoursesNumber("CS3733");
//			course1.setCoursesTitle("Software Engineering");
//			course1.setFrequency("4 Times/Year");
//			
//			CourseInfo course2 = new CourseInfo();
//			course2.setCoursesNumber("CS2223");
//			course2.setCoursesTitle("Algorithms");
//			course2.setFrequency("2 Times/Year");
//			
//			CourseInfo course3 = new CourseInfo();
//			course3.setCoursesNumber("CS####");
//			course3.setCoursesTitle("Something...");
//			course3.setFrequency("-5 Times/Year");
//			
//			
//			courses.add(course1);
//			courses.add(course2);
//			courses.add(course3);
//			
//			return courses;
//		}
	
//	@Override
//	public void fillSection() {
//		ListBox term = view.getTermComboBox();
//		
//		List<CourseInfo> courses = retrieveCourses();
//		Iterator<CourseInfo> iterator = courses.iterator();
//		
//		
//		while(iterator.hasNext()) {
//			CourseInfo courseInfo = iterator.next();
//
//			//create label and add it to the course list
//			Label label = new Label("Required Frequency: " + courseInfo.getFrequency());
//			panel.add(label, courseInfo.getCoursesNumber() +": "+ courseInfo.getCoursesTitle());
//		}
//		
//		
//		view.setCourseList(panel);
//	}
	
}

