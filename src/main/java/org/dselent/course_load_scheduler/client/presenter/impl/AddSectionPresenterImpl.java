package org.dselent.course_load_scheduler.client.presenter.impl;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import org.dselent.course_load_scheduler.client.view.AddSectionView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.CheckBox;
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

		fillSectionTerms();
		fillSectionTypes();
		fillSectionStart();
		fillSectionEnd();
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

	//gets term info about sections
	@Override
	public List<SectionsInfo> retrieveTerm(){
		List<SectionsInfo> sections = new ArrayList<SectionsInfo>();

		SectionsInfo section1 = new SectionsInfo();
		section1.setTermsName("A Term");

		SectionsInfo section2 = new SectionsInfo();
		section2.setTermsName("B Term");

		SectionsInfo section3 = new SectionsInfo();
		section3.setTermsName("Fall");

		SectionsInfo section4 = new SectionsInfo();
		section4.setTermsName("C Term");

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);
		sections.add(section4);

		return sections;	

	}

	//gets section type info about sections
	@Override
	public List<SectionsInfo> retrieveType(){
		List<SectionsInfo> sections = new ArrayList<SectionsInfo>();

		SectionsInfo section1 = new SectionsInfo();
		section1.setSectionType("Lab");

		SectionsInfo section2 = new SectionsInfo();
		section2.setSectionType("Lecture");

		SectionsInfo section3 = new SectionsInfo();
		section3.setSectionType("Conference");

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);

		return sections;	

	}

	//gets start/end time info about sections
	@Override
	public List<SectionsInfo> retrieveTime(){
		List<SectionsInfo> sections = new ArrayList<SectionsInfo>();

		SectionsInfo section1 = new SectionsInfo();
		section1.setStartTime(new Time(10,0,0)); //deprecated Time type (hour, minute, second) cuz Gregorian calendar is too complicated
		section1.setEndTime(new Time(11,50,0));

		SectionsInfo section2 = new SectionsInfo();
		section2.setStartTime(new Time(13,0,0));
		section2.setEndTime(new Time(13,50,0));

		SectionsInfo section3 = new SectionsInfo();
		section3.setStartTime(new Time(8,0,0));
		section3.setEndTime(new Time(9,50,0));

		sections.add(section1);
		sections.add(section2);
		sections.add(section3);

		return sections;	

	}

	@Override
	public void fillSectionTerms() {
		ListBox term = view.getTermComboBox();

		List<SectionsInfo> sectionTerms = retrieveTerm();
		Iterator<SectionsInfo> iterator = sectionTerms.iterator();
		
		while(iterator.hasNext()) {
			SectionsInfo sectionsInfo = iterator.next();
			term.addItem(sectionsInfo.getTermsName());
		}
		
		view.setTermComboBox(term);
	}
	
	@Override
	public void fillSectionTypes() {
		ListBox type = view.getSectionTypeComboBox();

		List<SectionsInfo> sectionTypes = retrieveType();
		Iterator<SectionsInfo> iterator = sectionTypes.iterator();
		
		while(iterator.hasNext()) {
			SectionsInfo sectionsInfo = iterator.next();
			type.addItem(sectionsInfo.getSectionType());			
		}
				
		view.setSectionTypeComboBox(type);
	}
	
	@Override
	public void fillSectionStart() {
		ListBox start = view.getSectionStartTimeComboBox();
		

		List<SectionsInfo> sectionStart = retrieveTime();
		Iterator<SectionsInfo> iterator = sectionStart.iterator();
		
		while(iterator.hasNext()) {
			SectionsInfo sectionsInfo = iterator.next();
			start.addItem(sectionsInfo.getStartTime().toString());			
		}
		
		view.setSectionStartTimeComboBox(start);
	}
	
	@Override
	public void fillSectionEnd() {
		ListBox end = view.getSectionEndTimeComboBox();
		

		List<SectionsInfo> sectionEnd = retrieveTime();
		Iterator<SectionsInfo> iterator = sectionEnd.iterator();
		
		while(iterator.hasNext()) {
			SectionsInfo sectionsInfo = iterator.next();
			end.addItem(sectionsInfo.getEndTime().toString());			
		}
		
		view.setSectionEndTimeComboBox(end);
	}
	
	//determine which days are selected and stick them together as a string
	@Override
	public String determineDays() {
		CheckBox monday = view.getMondayCheckBox();
		CheckBox tuesday = view.getTuesdayCheckBox();
		CheckBox wednesday = view.getWednesdayCheckBox();
		CheckBox thursday = view.getThursdayCheckBox();
		CheckBox friday = view.getFridayCheckBox();		
		
		StringBuilder days = new StringBuilder();
		
		if(monday.getValue()) {
			days.append(monday.getText());
		}
		if(tuesday.getValue()) {
			days.append(tuesday.getText());
		}
		if(wednesday.getValue()) {
			days.append(wednesday.getText());
		}
		if(thursday.getValue()) {
			days.append(thursday.getText());
		}		
		if(friday.getValue()) {
			days.append(friday.getText());
		}
		
		return days.toString();		
	}

	@Override
	public void addSection() {
		ListBox term = view.getTermComboBox();
		ListBox type = view.getSectionTypeComboBox();
		ListBox start = view.getSectionStartTimeComboBox();
		ListBox end = view.getSectionEndTimeComboBox();
		
		//create the new section
		SectionsInfo newSection = new SectionsInfo();
		newSection.setTermsName(term.getItemText(term.getSelectedIndex()));
		newSection.setSectionType(type.getItemText(type.getSelectedIndex()));
		newSection.setStartTime(Time.valueOf(start.getItemText(start.getSelectedIndex())));
		newSection.setEndTime(Time.valueOf(end.getItemText(end.getSelectedIndex())));
		newSection.setDays(this.determineDays());
	}

}

